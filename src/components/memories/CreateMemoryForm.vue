<template>
        <form class="ion-padding" @submit.prevent="submitForm">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Title</ion-label>
                    <ion-input type="text" required v-model="enteredTitle"/>
                </ion-item>
                <ion-item>
                    <ion-thumbnail slot="start">
                        <ion-img :src="chosenImageUrl"></ion-img>
                    </ion-thumbnail>
                    <ion-button type="button" fill="clear" @click="takePhoto">
                        <ion-icon slot="start" :icon="camera">
                        </ion-icon>
                        Take Photo
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Description</ion-label>
                    <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
                </ion-item>
            </ion-list>
            <ion-button type="submit" expand="full ion-margin-top">Save</ion-button>
        </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonImg, IonIcon } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { Plugins } from '@capacitor/core';
const { Camera, CameraResultType, CameraSource } = Plugins;

export default {
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonThumbnail,
        IonImg,
        IonIcon
    },
    data() {
        return {
            enteredTitle: '',
            enteredDescription: '',
            chosenImageUrl: '',
            camera 
        };
    },
    methods: {
        async takePhoto() {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 60
            });

            this.chosenImageUrl = photo.webPath;
        },
        submitForm() {
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.chosenImageUrl,
                description: this.enteredDescription
            };
            this.$emit('save-memory', memoryData);
        }
    }
}
</script>