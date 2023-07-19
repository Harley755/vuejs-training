import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    
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

        <section class="space-y-6">
            <assignment-list title="In progress" :assignments="filter.inProgres"></assignment-list>
            <assignment-list title="Completed" :assignments="filter.completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
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
        }
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