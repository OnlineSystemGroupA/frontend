<template>
    <div>
        <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
        >
            {{ tag.length > 50 ? tag.substring(0, 49) + '...' : tag }}
        </el-tag>
        <el-select
            class="select-option"
            v-model="newTag"
            ref="tagSelect"
            filterable
            allow-create
            default-first-option
            :placeholder="optionDescription"
            @change="handleInputConfirm"
        >
            <el-option
                v-for="item in defaultOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'SelectAndCreateTags',
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
     */
    model: {
        prop: 'options',
        event: 'change'
    },
    props: ["defaultOptions", "optionDescription"],

    data() {
        return {
            dynamicTags: [],
            inputVisible: false,
            newTag: ''
        };
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            this.onChange()
        },

        handleInputConfirm() {
            let inputValue = this.newTag.trim();
            if (inputValue) {
                if (this.dynamicTags.indexOf(inputValue) !== -1) {
                    this.handleDuplicateTag(inputValue);
                }
                this.dynamicTags.push(inputValue);
                this.onChange();
            }
            this.newTag = '';
        },

        handleDuplicateTag(tag) {
            this.handleClose(tag);
        },

        onChange(){
            this.$emit('change', this.dynamicTags);
        }
    }
}
</script>

<style lang="less" scoped>
.el-tag {
    height: 32px;
    margin-right: 10px;
    margin-top: 5px;
}

.select-option {
    width: 200px;
    margin-left: 10px;
    margin-top: 5px;
    vertical-align: bottom;

    /deep/ .el-input__inner {
        height: 32px;
    }
}
</style>