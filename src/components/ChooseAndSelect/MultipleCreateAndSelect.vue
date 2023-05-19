<template>
    <div>
        <el-select
            class="multiple-select"
            v-model="selectedOptions"
            @change="onChange"
            multiple
            collapse-tags
            default-first-option
            :placeholder="optionDescription"
        >
            <li>
                <el-input v-model="newOption" class="el-add-input" :placeholder="createDescription">
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
     * options: array of string
     * defaultOptions: array of {value, label}
     * e.g. [
     *     {value: "option1", label:"option1"},
     *     {value: "option2", label:"option2"},
     *     {value: "option3", label:"option3"},
     * ]
     *
     * optionDescription: string
     * createDescription: string
     */
    model: {
        prop: 'options',
        event: 'change'
    },
    props: ["defaultOptions", "optionDescription", "createDescription"],

    data() {
        return {
            selectedOptions: [],
            createdOptions: [],
            newOption: '',
        }
    },
    methods: {
        addNewOption() {
            let inputValue = this.newOption.trim();
            if (inputValue) {
                this.createdOptions.push(
                    {value: inputValue, label: inputValue}
                );
            }
            this.newOption = "";
        },

        onChange() {
            this.$emit('change', this.selectedOptions);
        }
    }
}
</script>

<style lang="less" scoped>
.el-add-input {
    width: 90%;
    margin-left: 5%;
    margin-right: 3%;

    /deep/ .el-input__suffix {
        width: 10%;
        margin-right: 10%;
    }
}

.multiple-select {
    width: 200px;
    margin-left: 10px;
    vertical-align: bottom;

    /deep/ .el-select__tags .el-tag {
        max-width: 60%;
    }
}
</style>