import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length">

            <h2 class="font-bold mt-5">
                {{ title }}
                <span>( {{ assignments.length }} )</span>
            </h2>
            
            <div class="flex gap-2 mt-4">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                >
                    {{ tag }}
                </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>

            <!-- <pre>
                {{ assignments }}
            </pre> -->
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: '',
        }
    },

    computed: {
        filteredAssignments() {
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}