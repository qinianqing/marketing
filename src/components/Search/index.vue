 <template>
  <el-form
    :inline="true"
    :model="searchForm"
    :label-position="labelPosition"
    label-width="100px"
    ref="searchForm"
  >
    <div
      class="inline-form"
      :class="{ 'inline-form__large': options.length > 2 }"
    >
      <div :key="index" v-for="(item, index) in options" class="search-item">
        <!-- input -->
        <el-form-item
          :label="item.label"
          v-if="item.type === 'Input' || item.type == 'Tel'"
        >
          <el-input
            style="width: 256px; margin-right: 69px"
            :clearable="item.clear"
            v-model="searchForm[item.key]"
            placeholder="请输入"
            @input="changeInputNumber(item)"
          ></el-input>
        </el-form-item>
        <!-- select -->
        <el-form-item :label="item.label" v-if="item.type === 'Select'">
          <el-select
            :clearable="item.clear"
            :multiple="item.multiple"
            v-model="searchForm[item.key]"
            placeholder="请选择"
            v-if="item.type === 'Select'"
            style="width: 256px; margin-right: 69px"
          >
            <el-option
              v-for="itemT in item.options"
              :key="itemT.value"
              :label="itemT.label"
              :value="itemT.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- DatePicker -->
        <el-form-item :label="item.label" v-if="item.type === 'DatePicker'">
          <el-date-picker
            v-model="searchForm[item.key]"
            :type="item.picker_type"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            placeholder="请选择"
            style="width: 256px; margin-right: 69px"
          ></el-date-picker>
        </el-form-item>
        <!-- DateTimePicker -->
        <el-form-item :label="item.label" v-if="item.type === 'DateTimePicker'">
          <el-date-picker
            v-model="searchForm[item.key]"
            :type="item.picker_type"
            :picker-options="item.pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            style="width: 256px; margin-right: 69px"
          ></el-date-picker>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>
 <script>
export default {
  name: "Search",
  props: {
    options: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      searchForm: {},
      labelPosition: "right",
    };
  },
};
</script>
<style lang="scss" scoped>
.search-item {
  margin-right: 40px;
  display: flex;
}
.inline-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  &__large {
    justify-content: flex-start;
  }
}
</style>