export default {
    template: `
        <div>
            <input type="radio" name="radio1" id="fruits">
            <label for="fruits" @click="toogleFruit">Fruit</label>
        </div>
        <div :class="fruitActive ? fruit_block : fruitNone">
            <p>Fruits content</p>
        </div>
        <div>
            <input type="radio" name="radio1" id="legumes">
            <label for="legumes" @click="toogleLegume">Legumes</label>
        </div>
        <div :class="legumeActive ? legume_block : legumeNone">
            <p>Légumes content</p>
        </div>

        <section v-show="inProgresAssignments.length">
            <h2 class="font-bold mt-5">In progress</h2>

            <ul>
                <li v-for="assignment in inProgresAssignments" :key="assignment.id">
                    <label>
                        {{assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>

            <!-- <pre>
                {{ assignments }}
            </pre> -->
        </section>

        <section v-show="completedAssignments.length">
            <h2 class="font-bold mt-5">Completed</h2>

            <ul>
                <li v-for="assignment in completedAssignments" :key="assignment.id">
                    <label>
                        {{assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,

    data() {
        return {
            fruitNone: 'fruit_none',
            legumeNone: 'legume_none',
            fruitBlock: 'fruit_block',
            legumeBlock: 'legume_block',
            legumeActive: false,
            fruitActive: false,

            assignments: [
                { name: 'Finish Project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
        }
    },

    methods: {
        toogleFruit() {
            this.fruitActive = true;
            this.legumeActive = false;
        },
        toogleLegume() {
            this.legumeActive = true;
            this.fruitActive = false;
        }
    },

    computed: {
        inProgresAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        },
    },
}
