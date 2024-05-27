<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="table1.data" :columns="table1.columns">
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Name", "Activity","Total", "Address"];
const tableData = [
  {
    id: 1,
    name: "Lim",
    activity: "eyetest",
    total: "RM100",
    address: "Johor",
  },
  {
    id: 2,
    name: "Lee",
    activity: "eyetest",
    total: "RM100",
    address: "Johor",
  },
  {
    id: 3,
    name: "Wong",
    activity: "sunglass",
    total: "RM188",
    address: "Johor",
  },
  {
    id: 4,
    name: "Tan",
    activity: "eyeglasses",
    total: "RM288",
    address: "Johor",
  },
  {
    id: 5,
    name: "Tai",
    activity: "contact lens",
    total: "RM123",
    address: "Johor",
  },
  {
    id: 6,
    name: "Ong",
    activity: "sunglasses",
    total: "RM188",
    address: "Johor",
  },
  {
    id: 7,
    name: "Chai",
    activity: "eyetest",
    total: "RM120",
    address: "Johor",
  },
  {
    id: 8,
    name: "Lai",
    activity: "contact lens",
    total: "RM99",
    address: "Johor",
  },
  {
    id: 9,
    name: "Lye",
    activity: "sunglasses",
    total: "RM188",
    address: "Johor",
  },
  {
    id: 10,
    name: "Sun",
    activity: "eyeglasses",
    total: "RM388",
    address: "Johor",
  },
];

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Records",
        subTitle: "",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style></style>
