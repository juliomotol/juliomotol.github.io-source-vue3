<template>
  <main class="p-8 lg:px-16 prose dark:prose-invert">
    <h1>Works & Creations</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardComponent v-for="(work, index) in works" :key="index">
        <template v-slot:image>
          <div class="aspect-[4/3] not-prose">
            <img
              class="aspect-[inherit] object-cover"
              :src="work.thumbnail || 'https://bulma.io/images/placeholders/1280x960.png'"
            />
          </div>
        </template>
        <h3 class="mt-0">
          {{ work.title }}
        </h3>
        <p>
          <small>
            <time :datetime="work.publishDate.toISOString()">
              {{ work.publishDate.toDateString() }}
            </time>
          </small>
        </p>
        <InlineList>
          <BadgeComponent v-for="(tag, index) in work.tags" :key="index">
            {{ tag }}
          </BadgeComponent>
        </InlineList>
      </CardComponent>
    </div>
    <h2>Need a project done?</h2>
    <p>
      I'm up for any freelance work. If you think I'm the right person for your new project, feel free to hit me up!
    </p>
    <InlineList>
      <ButtonComponent :is="RouterLink" :to="{ name: 'contact' }">Get in touch</ButtonComponent>
    </InlineList>
  </main>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { usePage } from "@/mixins/page";
import ButtonComponent from "../components/ButtonComponent.vue";
import BadgeComponent from "../components/BadgeComponent.vue";
import InlineList from "../components/InlineList.vue";
import CardComponent from "../components/CardComponent.vue";
import { onMounted, ref } from "vue";

interface WorkConfig {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  preview: string;
  publishDate: Date;
  tags: Array<string>;
}

usePage({ isFullpage: true });

const works = ref<Array<WorkConfig>>([]);

onMounted(async () => {
  const workMardowns = import.meta.glob("/articles/*/*.md");

  for (const path in workMardowns) {
    const { frontmatter } = await workMardowns[path]();

    const thumbnail = (await import(`/articles/${frontmatter.slug}/${frontmatter.thumbnail}`)).default;
    const preview = (await import(`/articles/${frontmatter.slug}/${frontmatter.preview}`)).default;

    works.value.push({
      ...frontmatter,
      publishDate: new Date(frontmatter.publishDate),
      thumbnail,
      preview,
    });
  }
  sortWorksByPublishDate();
});

function sortWorksByPublishDate() {
  works.value = works.value.sort((previous, current) => {
    return current.publishDate.getTime() - previous.publishDate.getTime();
  });
}
</script>
