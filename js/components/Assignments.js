import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    
    template: `
        <!--
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
        !-->

        <section class="flex gap-8">
            <assignment-list title="In progress" :assignments="filter.inProgres">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list 
                    title="Completed" 
                    :assignments="filter.completed" 
                    can-toogle
                    @toogle="showCompleted = !showCompleted"
                >
                </assignment-list>
            </div>
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

            assignments: [],

            showCompleted: true,
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
        },

        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
            });
        },
    },

    created() {
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(assignments => { 
            this.assignments = assignments;
            console.log('assignments: ', assignments);
        })
        .catch((err) => console.log(err))
    },

    computed: {
        filter() {
            return {
                inProgres: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },
}