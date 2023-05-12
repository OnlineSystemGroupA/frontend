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
            class="select-new-tag"
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
    name: 'ChooseAndCreateTags',
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
        },

        handleInputConfirm() {
            let inputValue = this.newTag;
            if (inputValue) {
                if (this.dynamicTags.indexOf(inputValue) !== -1) {
                    this.handleDuplicateTag(inputValue);
                }
                this.dynamicTags.push(inputValue);
            }
            this.newTag = '';
        },

        handleDuplicateTag(tag) {
            this.handleClose(tag);
        }
    }
}
</script>

<style lang="less">
.el-tag {
    height: 32px;
    margin-right: 10px;
    margin-top: 5px
}

.select-new-tag {
    width: 200px;
    margin-left: 10px;
    margin-top: 5px;
    vertical-align: bottom;

    .el-input__inner {
        height: 32px;
    }
}
</style>