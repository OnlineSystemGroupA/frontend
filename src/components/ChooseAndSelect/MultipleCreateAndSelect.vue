<template>
    <div>
        <el-select
            class="select-options"
            v-model="selectedOptions"
            ref="tagSelect"
            multiple
            collapse-tags
            default-first-option
            :placeholder="optionDescription"
        >
            <li>
                <el-input v-model="newOption" class="el-add-input">
                    <template #suffix>
                        <el-button type="text" @click="addNewOption">添加</el-button>
                    </template>
                </el-input>
            </li>
            <el-option
                v-for="item in defaultOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
            <el-option
                v-for="item in createdOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'MultipleCreateAndSelect',
    /**
     * defaultOptions: array of {value, label}
     * e.g. [
     *     {value: "option1", label:"option1"},
     *     {value: "option2", label:"option2"},
     *     {value: "option3", label:"option3"},
     * ]
     *
     * optionDescription: string
     */
    props: ["defaultOptions", "optionDescription"],

    data() {
        return {
            selectedOptions: [],
            createdOptions: [],
            newOption: "",
        }
    },
    methods: {
        addNewOption() {
            this.createdOptions.push(
                {value: this.newOption, label: this.newOption}
            );
            this.newOption = "";
        }
    }
}
</script>

<style scoped>
.el-add-input {
    width: 90%;
    margin-left: 5%;
    margin-right: 3%;

    /*/deep/ .el-input__inner {*/
    /*    width: 80%;*/
    /*}*/
    /*/deep/ .el-input__suffix {*/
    /*    width: 20%;*/
    /*}*/
}

.select-options {
    width: 200px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>