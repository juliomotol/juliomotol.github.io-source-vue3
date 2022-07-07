<template>
  <main class="p-8 prose">
    <h1>Get in touch</h1>
    <h2>Social Accounts</h2>
    <p>
      You can find me in most social media sites (though I may not be active in posting). Hit me up if you ever like it
      or follow me to keep in the touch with the following social media site.
    </p>
    <InlineList class="not-prose">
      <!-- href="https://www.facebook.com/juliomotol89" -->
      <ButtonComponent class="bg-[#3b5998]">
        <IconFacebook class="w-4 h-4 fill-white inline mr-2 align-middle" />
        <span>Facebook</span>
      </ButtonComponent>
      <!-- href="https://www.instagram.com/julio.motol/" -->
      <ButtonComponent class="bg-gradient-to-r from-[#feda77] via-[#f58529,#dd2a7b,#8134af] to-[#515bd4]">
        <IconInstagram class="w-4 h-4 fill-white inline mr-2 align-middle" />
        <span>Instagram</span>
      </ButtonComponent>
      <!-- href="https://github.com/juliomotol" -->
      <ButtonComponent class="bg-[#24292e]">
        <IconGithub class="w-4 h-4 fill-white inline mr-2 align-middle" />
        <span>GitHub</span>
      </ButtonComponent>
      <!-- href="https://stackoverflow.com/users/4672917/julio-motol" -->
      <ButtonComponent>
        <IconStackOverflow class="w-4 h-4 fill-white inline mr-2 align-middle" />
        <span>Stack Overflow</span>
      </ButtonComponent>
    </InlineList>
    <h2>Send a Message</h2>
    <p>
      Got a question, project needed to made or a lovely message that you want to send? Send me an email at
      <a href="mailto:julio.motol89@gmail.com">julio.motol89@gmail.com</a>.
    </p>
  </main>
</template>

<script lang="ts" setup>
import InlineList from "../components/InlineList.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconInstagram from "../components/icons/IconInstagram.vue";
import IconGithub from "../components/icons/IconGithub.vue";
import IconStackOverflow from "../components/icons/IconStackOverflow.vue";
</script>
