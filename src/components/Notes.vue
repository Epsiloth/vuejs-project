<template>
  <div class="w-100">
      <h1 id="my-title" class="text-light">Vue.js Proyect - Pablo Torres</h1>
	  <div class="d-inline m-2">
	  	<div class="d-inline-flex w-50 ml-auto">
			<input class="form-control input-lg w-75 d-inline bg-dark text-light" type="text" placeholder="Write notes here..." v-model="input" v-on:keyup.enter="addNote">
			<div class="d-inline" style="margin-left:5px">
				<button v-on:click="addNote" class="btn btn-warning mr-1">+</button>
			</div>
		</div>
		<div class="d-inline-flex mr-auto">
			<input class="form-control input-lg w-75 d-inline bg-dark text-light" type="search" placeholder="Search notes..." v-model="search">
		</div>
	  </div>
	  <hr class="bg-light">
	  <p class="text-center text-light">You have completed {{completed}} out of {{notes.length}} tasks. |  
	  	<a href="#" class="text-warning" v-on:click="removeNote">&times; Delete completed tasks.</a>
	  </p>
	  <hr class="bg-light">
	  <transition-group name="fade">
	  		<div v-for="(note, index) in sortedNotes" v-bind:key="note.id" v-bind:class="{ checked: note.checked }">
		  		<div class="container text-light bg-dark border mb-2">
			  	<div class="row">
					<div class="col-1">
						<input type="checkbox" :id="note.id" v-model="note.checked" style="display:none">
						<label class="my-label" :for="note.id"><img class="w-100" v-bind:class="{ imgchecked : note.checked }" src="../assets/unchecked.png"/></label>
					</div>
					<div class="col-10 text-left text-light text-break">
						<h2 v-bind:class="{notechecked : note.checked}">{{ note.text }}</h2>
					</div>
					<div class="col-1 text-right">
						<span class="closebtn" v-on:click="removeThisNote(index)"><img class="w-100" src="../assets/delete.png"/></span>
					</div>
				</div>
				<div class="row">
					<div class="col-1 text-secondary">
				    <h5>Priority: </h5>
					</div>
				    <div class="btn-group btn-group-toggle col-3 text-left" data-toggle="buttons">
				    	<label class="btn btn-info" v-bind:class="{ active : note.priority == 'prioLow' }" >
				    		<input type="radio" :name="note.id" value="prioLow" v-on:click="toggleButton($event, note)">Low
				    	</label>
				    	<label class="btn btn-primary" v-bind:class="{ active : note.priority == 'prioMed' }" >
				    		<input type="radio" :name="note.id" value="prioMed" v-on:click="toggleButton($event, note)">Medium
				    	</label>
				    	<label class="btn btn-danger" v-bind:class="{ active : note.priority == 'prioHigh' }" >
				    		<input type="radio" :name="note.id" value="prioHigh" v-on:click="toggleButton($event, note)">High
				    	</label>
					</div>
					<div class="col-8 text-right text-secondary">
				    <p>Created on {{ note.time }}</p>
					</div>
				</div>
			  </div>
	  		</div>
	  	</transition-group>
  </div>
</template>

<script type = "text/javascript" >
	export default {
		data: function() {
			return {
				input: '',
				search: '',
				isSearching: false,
				idCounter: 0,
				notes: []
			}
		},
		mounted: function() {
		    if (localStorage.notes) {
		      this.notes = JSON.parse(localStorage.notes);
		    }
		    if (localStorage.counter) {
		    	this.idCounter = JSON.parse(localStorage.counter);
		    }
	    },
	    watch: {
	        notes: function(newNotes) {
	            localStorage.notes = JSON.stringify(newNotes);
	        },
	        idCounter: function(newCounter) {
	            localStorage.counter = JSON.stringify(newCounter);
	        },
	        search: function(){
	        	if(this.search != ''){
	        		this.isSearching = true;
	        	}else{
	        		this.isSearching = false;
	        	}
	        }
	    },
		computed: {
			completed: function(){
				return this.notes.filter(noto => {return noto.checked === true}).length;
			},
			sortedNotes: function() {
				if(!this.isSearching){
					return this.notes.slice().sort(function(a, b){
		            	let textA = "";
		            	let textB = "";

		            	if(a.priority == 'prioLow'){
		            		textA = "c";
		            	}
		            	if(a.priority == 'prioMed'){
		            		textA = "b";
		            	}
		            	if(a.priority == 'prioHigh'){
		            		textA = "a";
		            	}

		            	if(b.priority == 'prioLow'){
		            		textB = "c";
		            	}
		            	if(b.priority == 'prioMed'){
		            		textB = "b";
		            	}
		            	if(b.priority == 'prioHigh'){
		            		textB = "a";
		            	}

		                if (textA === textB) {
		                    return 0;
		                }
		                else {
		                    return (textA < textB) ? -1 : 1;
		                }
	            	});
				}else{
					return this.notes.slice().sort(function(a, b){
		            	let textA = "";
		            	let textB = "";

		            	if(a.priority == 'prioLow'){
		            		textA = "c";
		            	}
		            	if(a.priority == 'prioMed'){
		            		textA = "b";
		            	}
		            	if(a.priority == 'prioHigh'){
		            		textA = "a";
		            	}

		            	if(b.priority == 'prioLow'){
		            		textB = "c";
		            	}
		            	if(b.priority == 'prioMed'){
		            		textB = "b";
		            	}
		            	if(b.priority == 'prioHigh'){
		            		textB = "a";
		            	}

		                if (textA === textB) {
		                    return 0;
		                }
		                else {
		                    return (textA < textB) ? -1 : 1;
		                }
	            	}).filter(noto => {return noto.text.toLowerCase().includes(this.search.toLowerCase())});
				}
        	}
		},
		methods: {
			addNote: function(){
				if(this.input != ''){
					let today = new Date();
		            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		            let dateTime = date +' '+ time;
		        	this.notes.push({id:this.idCounter, checked:false, text:this.input, priority:"prioLow", time:dateTime});  
		        	this.input = "";
		        	this.idCounter += 1;
				}
        	},
        	searchNote: function(){
        		if(this.search != ''){
        			this.isSearching = true;
        		}else{
        			this.isSearching = false;
        		}
        	},
	        removeNote: function(){
	            for(let i=this.notes.length-1; i>=0; i--){
	                if(this.notes[i].checked){
	                    this.notes.splice(i, 1);
	                }
	            }
	        },
	        removeThisNote: function(id){
	        	this.notes.splice(id, 1);
	        },
	        toggleButton: function(e, myNote){
	        	console.log(myNote.id+" "+e.target);
	        	myNote.priority = e.target.value;
	        	localStorage.notes = JSON.stringify(this.notes);
	        },
	        updateStorage: function(myNote){
	        	myNote.checked = !myNote.checked;
	        	localStorage.notes = JSON.stringify(this.notes);
	        }
		}
	};
</script>

<style>
	.closebtn{
		cursor:pointer;
	}	
	.my-label{
		cursor:pointer;
	}
	.notechecked{
		color:green;
		text-decoration: line-through;
	}
	.imgchecked{
		content:url("../assets/checked.png");
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	#my-title{
	  margin-top: 60px;
	  margin-bottom: 20px;
	}
</style>