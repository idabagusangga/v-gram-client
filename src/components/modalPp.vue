<template lang="html">
    <div class="modal" id="myModalPp">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Upload Profile Pic</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <!-- <img style="height: 200px; width: 200px; display: block;" :src="preUpload" alt="Card image"> -->
                <div class="form-group">
                  <label for="exampleTextarea">Caption</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" v-model="preUpload.caption"></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" class="form-control-file" id="inputFile" aria-describedby="fileHelp" @change="readURL">
                  <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="multer">Upload</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    data : function(){
        return {
            preUpload : {},
            fotoBaru : ''
        }
    },
    methods : {
        multer(){
        let token = localStorage.getItem('token')
        let data = new FormData();
        data.append('caption',this.preUpload.caption)
        data.append('image',document.getElementById('inputFile').files[0])
        data.append('token',token)
        data.append('uploadDate',new Date())
        
        console.log(data);
    
        axios.post('http://localhost:3000/pictures/addpp',data)
        .then(response=>{
            // this.fotoBaru = response.data.data.album[response.data.data.album.length-1]
            // this.$emit('fotoBaruNih',this.fotoBaru)
            alert('hello2 berhasil')
            // location.reload()
        })
        .catch(err=>{
            console.log(err);
            // this.$router.push('/login')
        })
    },
    readURL(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
        return;
        console.log('ini read url -------->',files);
        this.createImage(files[0]);
    },
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
            vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }       
}
</script>

<style lang="css">
</style>
