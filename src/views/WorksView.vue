<template>
  <main class="p-8 lg:px-16 prose dark:prose-invert">
    <h1>Works & Creations</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
      <template v-for="(work, index) in works" :key="index">
        <RouterLink
          :to="{
            name: 'works.show',
            params: { slug: work.slug },
          }"
        >
          <CardComponent>
            <template v-slot:image>
              <div class="aspect-[4/3] not-prose">
                <img
                  class="aspect-[inherit] object-cover"
                  :src="work.preview || 'https://bulma.io/images/placeholders/1280x960.png'"
                />
              </div>
            </template>
            <h3 class="text-xl font-bold">
              {{ work.title }}
            </h3>
            <p class="mb-6">
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
        </RouterLink>
      </template>
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
import { ref } from "vue";
import { getWorkFrontmatters, type WorkFrontmatter } from "../helpers/works";

usePage({ isFullPage: true });

const works = ref<WorkFrontmatter[]>([]);

getWorkFrontmatters().then((workFrontmatters) => {
  works.value = workFrontmatters;
  sortWorksByPublishDate();
});

function sortWorksByPublishDate() {
  works.value = works.value.sort((previous, current) => {
    return current.publishDate.getTime() - previous.publishDate.getTime();
  });
}
</script>
