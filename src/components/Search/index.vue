 <template>
  <div class="form-container">
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
            :prop="item.key"
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
          <el-form-item
            :label="item.label"
            v-if="item.type === 'Select'"
            :prop="item.key"
          >
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
          <el-form-item
            :label="item.label"
            v-if="item.type === 'DatePicker'"
            :prop="item.key"
          >
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
          <el-form-item
            :label="item.label"
            v-if="item.type === 'DateTimePicker'"
            :prop="item.key"
          >
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
    <div class="sure">
      <el-button class="reset" @click="resetForm('searchForm')">重置</el-button>
      <el-button type="primary" class="find" @click="submitForm('searchForm')"
        >查询</el-button
      >
    </div>
  </div>
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
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeInputNumber(value) {},
    submitForm(formName) {
      this.$emit("search", this[formName]);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-container {
  position: relative;
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
  .sure {
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    position: absolute;
    margin-top: 20px;
    .reset {
      width: 100px;
      height: 40px;
      border: 1px solid $base-main-color;
      color: $base-main-color;
      font-size: 14px;
      font-family: $base-text-main-family;
      font-weight: 400;
      color: $base-main-color;
    }
    .find {
      width: 100px;
      height: 40px;
      background: $base-main-color;
      font-size: 14px;
      font-family: $base-text-main-family;
      font-weight: 400;
      color: $base-text-Invert-color;
    }
  }
}
</style>