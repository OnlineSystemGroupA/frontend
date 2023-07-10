<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'ConfidentialityForm',
    props: ['writable', 'processId'],
    data() {

    },
    computed: {
        disable() {
            if (this.writable === 'false') {
                return true
            } else if (this.writable === 'true') {
                return false
            } else if (!this.writable) {
                return true
            }
            return false
        },
    },
    methods: {
        submit(){

        },
        doSubmit() {
            
        },
        save() {
            
        }
    }
}
</script>

<style></style>