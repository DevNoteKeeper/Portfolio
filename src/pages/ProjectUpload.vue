<template>
  <div v-if="isLoggedIn && isAdmin" class="upload-container">
    <h3>Upload Project</h3>
    <form @submit.prevent="uploadProject">
      <div class="input-group">
        <label for="name">Project Name</label>
        <input type="text" v-model="project.name" id="name" required />
      </div>

      <div class="input-group">
        <label for="description">Description</label>
        <textarea v-model="project.description" id="description" required></textarea>
      </div>

      <div class="input-group">
        <label for="period">Period</label>
        <input type="text" v-model="project.period" id="period" required />
      </div>

      <!-- Main Image Upload -->
      <div class="input-group">
        <label for="mainImageFile">Main Image File</label>
        <input type="file" @change="handleMainImageUpload" id="mainImageFile" accept="image/*" />
        <p v-if="uploadProgress.mainImage">Uploading: {{ uploadProgress.mainImage }}%</p>
      </div>

      <!-- Additional Images Upload -->
      <div class="input-group">
        <label for="additionalImageFiles">Additional Images</label>
        <input type="file" @change="handleAdditionalImagesUpload" id="additionalImageFiles" accept="image/*" multiple />
        <p v-if="uploadProgress.additionalImages">Uploading: {{ uploadProgress.additionalImages }}%</p>
      </div>

      <div class="input-group">
        <label for="type">Type (Comma-separated)</label>
        <input type="text" v-model="typeInput" id="type" required />
      </div>

      <div class="input-group">
        <label for="languages">Languages (Comma-separated)</label>
        <input type="text" v-model="languagesInput" id="languages" required />
      </div>

      <div class="input-group">
        <label for="tools">Tools (Comma-separated)</label>
        <input type="text" v-model="toolsInput" id="tools" required />
      </div>

      <div class="input-group">
        <label for="link">Project Link</label>
        <input type="url" v-model="project.link" id="link" />
      </div>

      <div class="input-group">
        <label for="mainDisplay">Main Display</label>
        <select v-model="project.main_display" id="mainDisplay">
          <option :value="true">Yes</option>
          <option :value="false">No</option>
        </select>
      </div>

      <button type="submit">Upload</button>
    </form>
  </div>
  <div v-else>
    <p>
      You need to be logged in as an admin to upload a project.
      <router-link to="/login">Login here</router-link>
    </p>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  name: "ProjectUpload",
  data() {
    return {
      project: {
        name: "",
        description: "",
        main_image: "",
        additional_images: [],
        languages: [],
        type: [],
        tools: [],
        period: "",
        link: "",
        main_display: false,
      },
      additionalImagesInput: "",
      languagesInput: "",
      typeInput: "",
      toolsInput: "",
      isLoggedIn: false,
      isAdmin: false,
      uploadProgress: {
        mainImage: 0,
        additionalImages: 0,
      },
    };
  },
  created() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (!isLoggedIn || !isAdmin) {
      this.$router.push("/login");
    } else {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
  },
  methods: {
    async handleMainImageUpload(event) {
      const file = event.target.files[0];
      if (!file) {
        alert("No file selected.");
        return;
      }

      const storage = getStorage();
      const storageRef = ref(storage, `projects/main_images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadProgress.mainImage = Math.round(progress);
        },
        (error) => {
          console.error("Error uploading main image:", error);
          alert("Failed to upload main image.");
        },
        async () => {
          this.project.main_image = await getDownloadURL(uploadTask.snapshot.ref);
          alert("Main image uploaded successfully!");
        }
      );
    },
    async handleAdditionalImagesUpload(event) {
      const files = event.target.files;
      if (!files.length) {
        alert("No files selected.");
        return;
      }

      const storage = getStorage();
      const uploadPromises = Array.from(files).map((file) => {  // index 제거
  const storageRef = ref(storage, `projects/additional_images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
  "state_changed",
  (snapshot) => {
    // 업로드 진행 상태 (예: 퍼센트 계산)
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
  },
  (error) => {
    reject(error);
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL); // 다운로드 URL을 반환
    });
  }
);

  });
});


      try {
        this.project.additional_images = await Promise.all(uploadPromises);
        alert("Additional images uploaded successfully!");
      } catch (error) {
        console.error("Error uploading additional images:", error);
        alert("Failed to upload additional images.");
      }
    },
    async uploadProject() {
      this.project.languages = this.languagesInput
        ? this.languagesInput.split(",").map((lang) => lang.trim())
        : [];
      this.project.type = this.typeInput
        ? this.typeInput.split(",").map((type) => type.trim())
        : [];
      this.project.tools = this.toolsInput
        ? this.toolsInput.split(",").map((tool) => tool.trim())
        : [];

      try {
        await addDoc(collection(db, "projects"), this.project);
        alert("Project uploaded successfully!");
        this.resetForm();
      } catch (error) {
        console.error("Error uploading project:", error);
        alert("Failed to upload project. Please try again.");
      }
    },
    resetForm() {
      this.project = {
        name: "",
        description: "",
        main_image: "",
        additional_images: [],
        languages: [],
        type: [],
        tools: [],
        period: "",
        link: "",
        main_display: false,
      };
      this.additionalImagesInput = "";
      this.languagesInput = "";
      this.typeInput = "";
      this.toolsInput = "";
      this.uploadProgress = {
        mainImage: 0,
        additionalImages: 0,
      };
    },
  },
};
</script>

<style scoped>
.upload-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
h3 {
  text-align: center;
  margin-bottom: 1rem;
}
.input-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, textarea, select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
