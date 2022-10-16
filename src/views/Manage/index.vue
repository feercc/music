<script setup>
import { getMusicList, delMusic } from "./service";
import { computed, reactive, ref } from "vue";
import { usePagination, useRequest } from "vue-request";
import Modal from "./Modal.vue";
// import router from "../../router";
// import { message } from "ant-design-vue";

const {
  data: dataSource,
  run,
  loading,
  current,
  pageSize,
  total,
} = usePagination(getMusicList, {
  pagination: {
    totalKey: "data.total",
    currentKey: "page",
    pageSizeKey: "pageSize",
  },
});

const pagination = computed(() => ({
  total: total || 0,
  current: current.value,
  pageSize: pageSize.value,
}));

const handleTableChange = (params) => {
  run({
    pageSize: pagination.value.pageSize,
    page: pagination.value.current,
    ...params,
  });
};

const columns = [
  {
    title: "歌曲名",
    dataIndex: "name",
    key: "name",
    width: "160px",
  },
  {
    title: "歌曲类型",
    dataIndex: "type",
    key: "type",
    width: "120px",
  },
  {
    title: "歌手",
    dataIndex: "singer",
    key: "singer",
    width: "100px",
  },
  {
    title: "歌曲链接",
    dataIndex: "url",
    key: "url",
    width: "200px",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time",
    width: "130px",
  },
  {
    title: "更新时间",
    dataIndex: "update_time",
    key: "update_time",
  },
  {
    title: "操作",
    dataIndex: "id",
    key: "action",
  },
];

const { run: delRun } = useRequest(delMusic, {
  manual: true,
});

const deleteBtn = (id) => {
  delRun({ id });
};

const modalVisibel = ref(false);
const handleModalVisibel = (flag) => {
  modalVisibel.value = flag;
};

const formState = reactive({
  name: "",
  type: "",
  singer: "",
});
const handleFinish = (value) => {
  handleTableChange(value);
};
</script>

<template>
  <div class="content">
    <Modal v-model="modalVisibel"></Modal>
    <a-button class="add" @click="handleModalVisibel(true)">新增</a-button>
    <!-- form -->
    <a-form
      @finish="handleFinish"
      layout="inline"
      :model="formState"
      v-bind="formItemLayout"
      class="form-box"
    >
      <a-form-item label="歌曲名" name="name">
        <a-input v-model:value="formState.name" placeholder="请输入歌曲名" />
      </a-form-item>
      <a-form-item label="歌曲类型" name="type">
        <a-input v-model:value="formState.type" placeholder="请输入歌曲类型" />
      </a-form-item>
      <a-form-item label="歌手" name="singer">
        <a-input v-model:value="formState.singer" placeholder="请输入歌手" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>

    <a-table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="dataSource?.list || []"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-popconfirm
            title="确认删除?"
            ok-text="确认"
            cancel-text="取消"
            @confirm="deleteBtn(record.id)"
          >
            <a-button type="link">删除</a-button>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped>
@import url("./index.css");
</style>
