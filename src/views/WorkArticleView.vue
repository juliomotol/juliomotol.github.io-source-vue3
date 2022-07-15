<template>
  <main class="p-8 lg:px-16">
    <breadcrumb-component class="mb-5">
      <breadcrumb-item :to="{ name: 'works.index' }">Works</breadcrumb-item>
      <breadcrumb-item :to="{ name: 'works.show', params: { slug: workSlug } }">
        {{ workFrontmatter?.title }}
      </breadcrumb-item>
    </breadcrumb-component>
    <article class="prose dark:prose-invert">
      <h1>
        {{ workFrontmatter?.title }}
      </h1>
      <h3>
        {{ workFrontmatter?.description }}
      </h3>
      <component :is="workComponent" />
    </article>
  </main>
</template>

<script lang="ts" setup>
import { getWorkBySlug, type WorkFrontmatter } from "@/helpers/works";
import { usePage } from "@/mixins/page";
import { ref, shallowRef, type VNode } from "vue";
import { useRoute } from "vue-router";
import BreadcrumbComponent from "../components/BreadcrumbComponent.vue";
import BreadcrumbItem from "../components/BreadcrumbItem.vue";

const route = useRoute();

const workComponent = shallowRef<VNode | null>(null);
const workFrontmatter = ref<WorkFrontmatter | null>(null);
const page = usePage();
const workSlug: string =
  typeof route.params.slug === "string"
    ? route.params.slug
    : route.params.slug[0];

getWorkBySlug(workSlug).then((work) => {
  workComponent.value = work.default;
  workFrontmatter.value = work.frontmatter;
  page.backgroundImage = workFrontmatter.value?.preview ?? "";
});
</script>
