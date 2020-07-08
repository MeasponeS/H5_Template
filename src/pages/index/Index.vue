<template>
    <div id="app" class="index">
        这是我的h5模版
        <div class="box">

        </div>
        <Button>123</Button>
        <RadioGroup v-model="radio">
            <Radio name="1">单选框 1</Radio>
            <Radio name="2">单选框 2</Radio>
        </RadioGroup>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js';
    import Button from 'vant/lib/button';
    import { RadioGroup, Radio } from 'vant';
    import 'vant/lib/button/style';
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                radio: 1
            }
        },
        methods: {
	        onChange () {

            }
        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {Button, Radio, RadioGroup}
    }
</script>
<style lang="sass" scoped>
    .index
        .box
            background: red
            width: 187.5px
            height: 100px

</style>
