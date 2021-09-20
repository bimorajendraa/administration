<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <h1 class="title">Home Page</h1>
      <!-- Content goes here -->
      <b-field label="Class Name" class="has-text-left">
        <b-input v-model="className"></b-input>
      </b-field>
      <b-field label="Instructor Name" class="has-text-left">
        <b-input v-model="instructorName"></b-input>
      </b-field>
      <b-field label="Class Type" class="has-text-left">
        <div class="block">
          <b-radio v-model="classType" native-value="free">
            Free Class
          </b-radio>
          <b-radio v-model="classType" native-value="paid">
            Paid Class
          </b-radio>
        </div>
      </b-field>
      <b-button
        type="is-primary"
        expanded
        @click="saveClass()"
        :disabled="!isValid"
        >Add</b-button
      >
      <br />
      <b-collapse
        class="panel"
        animation="slide"
        v-for="(c, index) of allClasses"
        :key="index"
      >
        <template #trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">
              {{ c.className }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="content">
            Instructor: {{ c.instructorName }} ({{ c.classType }})
            <b-button
              @click="deleteClass(c.id)"
              expanded
              type="is-danger is-small is-outlined"
              >Delete</b-button
            >
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import { fbdb } from "../firebase";
export default {
  data() {
    return {
      className: "",
      instructorName: "",
      classType: "free",
      isOpen: 0,
      allClasses: [],
    };
  },
  name: "HomePage",
  components: {
    AppNavbar,
  },
  computed: {
    isValid() {
      if (this.className == "" || this.instructorName == "") return false;
      else return true;
    },
  },
  methods: {
    deleteClass(id) {
      const dbref = fbdb.ref("classes/" + id);
      dbref.remove().then(() => {
        this.fetchClasses();
      });
    },
    saveClass() {
      const loadingComponent = this.$buefy.loading.open();
      let classData = {
        className: this.className,
        instructorName: this.instructorName,
        classType: this.classType,
      };
      // Javascript Promise
      fbdb
        .ref("classes/")
        .push(classData)
        .then(() => {
          this.className = "";
          this.instructorName = "";
          this.classType = "free";
          loadingComponent.close();
          this.$buefy.toast.open({
            message: "Successfully added a new class!",
            type: "is-success",
          });
          this.fetchClasses();
        })
        .catch(() => {
          loadingComponent.close();
          this.$buefy.toast.open({
            message: "Failed to add a new class!",
            type: "is-danger",
          });
        });
    },
    fetchClasses() {
      this.allClasses = [];
      const dbref = fbdb.ref("classes/");
      dbref.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          let kelas = {
            id: childKey,
            ...childData,
          };
          this.allClasses.push(kelas);
        });
      });
    },
  },
  created() {
    this.fetchClasses();
  },
};
</script>