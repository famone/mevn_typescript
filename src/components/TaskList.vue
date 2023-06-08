<template>
    <div class="container mx-auto my-10 px-8">
        <div>
            <div class="mt-6 flow-root">
                <ul role="list" class="-my-5 divide-y divide-gray-200">
                    <li class="py-4" v-for="(item, index) in tasks" :key="index">
                        <div class="flex items-center space-x-4">
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium text-gray-900">{{item.title}}</p>
                                <p class="truncate text-sm text-gray-500">{{item.description}}</p>
                            </div>
                            <div>
                                <a :href="`/tasks/${item._id}`" class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 mr-2">View</a>
                                <a href="#" class="inline-flex items-center rounded-full border border-red-500 bg-red-500 px-2.5 py-0.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-red-600 hover:border-red-600" @click="deleteTask(item._id)">Delete</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue'
    import { getTasks, deleteTask } from '@/services/TaskService'
    import { Task } from '@/types/Task'

    export default defineComponent({
        data() {
            return {
                tasks: [] as Task[]
            }
        },
        methods: {
            async loadTasks() {
                const res = await getTasks()
                this.tasks = res.data
            },
            async deleteTask(id: string){
                await deleteTask(id).then(() =>{
                    this.loadTasks()
                })
                // console.log(res)
                // this.$router.push({name: 'tasks'})
            }
        },
        mounted() {
            this.loadTasks()
        }
    })
</script>
