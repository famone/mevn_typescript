<template>
   <div class="container mx-auto my-10 lg:px-8">
    <form @submit.prevent="saveTask">
        <div class="space-y-12">
            <div>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-full">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                    <div class="mt-2">
                        <input type="text" class="block w-1/2 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  v-model="task.title">
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="3" class="block w-1/2 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="task.description"></textarea>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-start gap-x-6">
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new task</button>
        </div>
    </form>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Task} from '@/types/Task'
import { createTask } from '@/services/TaskService'

export default defineComponent({
    data(){
        return{
            task: {
                
            } as Task
        }
    },
    methods:{
        async saveTask(){
            const res = await createTask(this.task)
            console.log(res)
            this.$router.push({name: 'tasks'})
        }
    }
})
</script>
