export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg': true,
            'bg-white border-gray-300 text-black': theme == 'light',
            'bg-gray-700 border-gray-600 text-white': theme == 'dark',
        }">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>

            <slot name="default" />

            <p><slot v-if="$slots.footer" name="footer" /></p>
            
        </div>
    `,

    props: {
        theme: {
            type: String,
            default: 'dark',
        },
    }
}