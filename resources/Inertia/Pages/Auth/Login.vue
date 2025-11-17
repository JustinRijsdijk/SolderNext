<script setup lang="ts">
import Logo from '@/Inertia/Components/Logo.vue';
import { useForm } from "@inertiajs/vue3";
import { store } from "@/js/routes/v1/authentication/login";
import {
  FwbAlert,
  FwbButton,
  FwbInput,
} from "flowbite-vue";

import {validationStatusMap} from "@node_modules/flowbite-vue/src/components/FwbInput/types"
import {useI18n} from "vue-i18n";

const form = useForm({
  email: "",
  password: '',
  remember: false,
});

const submit = () => {
  form.post(
      store.url(),
      {
        onFinish: () => form.reset('password'),
      }
  );
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <Logo />
        {{ $page.props.appName }}
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <form class="p-6 space-y-4 md:space-y-6 sm:p-8" @submit.prevent="submit">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log in to use Solder Next
          </h1>

          <div class="space-y-4 md:space-y-6">
            <div>
              <FwbInput
                  v-model="form.email"
                  label="Email"
                  type="email"
                  :validation-status="form.errors.email ? validationStatusMap.Error : undefined"
              >
                <template #validationMessage>
                  {{ form.errors.email }}
                </template>
              </FwbInput>
            </div>

            <div>
              <FwbInput
                  v-model="form.password"
                  label="Password"
                  type="password"
                  :validation-status="form.errors.password ? validationStatusMap.Error : undefined"
              >
                <template #validationMessage>
                  {{ form.errors.password }}
                </template>
              </FwbInput>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                      id="remember"
                      v-model="form.remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-gray-400">
                Forgot password?
              </a>
            </div>

            <div class="flex items-center justify-between">
              <FwbButton
                  color="default"
                  type="submit"
                  :loading="form.processing"
              >
                Log in
              </FwbButton>
            </div>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a href="#" class="font-medium hover:underline">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
