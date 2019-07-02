<template>
	<div class="column">
		<div class="card">
			<header class="card-header is-warning">
			    <p class="card-header-title">
			      <span class="tag is-dark" @click="exportToCsv('Users By State.csv', states)" style="cursor: pointer"><i class="fa fa-download"></i></span> Users By State
			    </p>
		  	</header>
		  	<div class="card-content">
			    <div class="content">
					<table class="table is-striped is-fullwidth">
						<thead>
							<tr>
								<th>State</th>
								<th>Count</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="state in states">
								<td><a :href="'/users/location/' + state.label" v-text="state.label"></a></td>
								<td><a :href="'/users/location/' + state.label" v-text="state.count"></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dashboardData from '../data/dashboardData.js';
	export default {
		name: 'StateCountOverview',
		mounted() {
			this.states = window.dashboardData.states;
		},
		data() {
			return dashboardData;
		},
		methods: {
			exportToCsv: function(filename, rows) {
	        	let csvFile = this.createCsvHeader();
	        	for (var i = 0; i < rows.length; i++) {
	            	csvFile += this.processRow(rows[i]);
	       		}
	        	var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
	    		return this.downloadCsv(blob, filename);
	    	},
	    	processRow(row) {
	   			let rowData = '';
	        	return rowData += row.label + ',' + row.count + '\n';
			},
			createCsvHeader() {
				let csvFile = 'State, Count';
	        	// let count = 0;
	   			// for (let state in this.states) {
	   			// 	count ++;
	   			// 	csvFile += this.states[state]['label'];
	   			// 	if (count < this.states.length)
	   			// 	{
	   			// 		csvFile += ', ';
	   			// 	}
	   			// }
	   			csvFile += '\n';
	   			return csvFile;
			},
			downloadCsv(blob, filename) {
				if (navigator.msSaveBlob) { // IE 10+
	          	  navigator.msSaveBlob(blob, filename);
	        	} else {
	            	var link = document.createElement("a");
		            if (link.download !== undefined) { // feature detection
		                // Browsers that support HTML5 download attribute
		                var url = URL.createObjectURL(blob);
		                link.setAttribute("href", url);
		                link.setAttribute("download", filename);
		                link.style.visibility = 'hidden';
		                document.body.appendChild(link);
		                link.click();
		                document.body.removeChild(link);
		            }
	        	}
			},
		}
	}
</script>