<template>
  <main class="p-8 lg:px-16 prose dark:prose-invert">
    <h1>Some things about me</h1>
    <h2>A Short Bio</h2>
    <p>
      I'm Julio, an aspiring full-stack developer from the Philippines. I
      studied at the Far Eastern University - Makati where I finished BS
      Information Technology. I have passion(addiction) for creating things. I'm
      constantly thinking of ways to do things better and faster. I enjoy
      working in teams specially the exchange of toughts and ideas. I love cats
      and dogs, but I'm afraid I might not have time to play with them.
    </p>
    <h2>Technical Skills</h2>
    <p>
      Exploring new programming languages and frameworks can be intimidating but
      I always enjoy the challenge of it. If it catches my interest, I'll
      definitely look it up. As of this moment, here is what I've used.
    </p>
    <InlineList class="not-prose">
      <BadgeComponent>HMTL, CSS &amp; JavaScript</BadgeComponent>
      <BadgeComponent>SASS/SCSS</BadgeComponent>
      <BadgeComponent>jQuery</BadgeComponent>
      <BadgeComponent>Vue.js</BadgeComponent>
      <BadgeComponent>Reactjs</BadgeComponent>
      <BadgeComponent>Laravel</BadgeComponent>
      <BadgeComponent>Xamarin.Forms</BadgeComponent>
      <BadgeComponent>Xamarin.Android</BadgeComponent>
      <BadgeComponent>Amazon Web Services</BadgeComponent>
      <BadgeComponent>Git</BadgeComponent>
      <BadgeComponent>CI/CD</BadgeComponent>
      <BadgeComponent>Adobe Photoshop</BadgeComponent>
      <BadgeComponent>Adobe Illstrator</BadgeComponent>
      <BadgeComponent>Adobe XD</BadgeComponent>
    </InlineList>
    <h2>Hobbies &amp; Interests</h2>
    <p>
      I'm not just a software developer. I always find time and myself in other
      particular activities. I try to be active in my personal and leisure
      activites despite my workloads. Below are what drives me to work harder
      everyday.
    </p>
    <InlineList class="not-prose">
      <BadgeComponent>Motorcycles</BadgeComponent>
      <BadgeComponent>Photography</BadgeComponent>
      <BadgeComponent>Graphic Design</BadgeComponent>
      <BadgeComponent>Fitness</BadgeComponent>
      <BadgeComponent>Ultimate Frisbee</BadgeComponent>
      <BadgeComponent>Road Cycling</BadgeComponent>
      <BadgeComponent>Swimming</BadgeComponent>
      <BadgeComponent>Music</BadgeComponent>
    </InlineList>
    <InlineList>
      <ButtonComponent :is="RouterLink" :to="{ name: 'works.index' }"
        >See what I can do</ButtonComponent
      >
    </InlineList>
  </main>
</template>

<script lang="ts" setup>
import BadgeComponent from "@/components/BadgeComponent.vue";
import InlineList from "../components/InlineList.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { RouterLink } from "vue-router";
</script>
