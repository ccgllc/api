@extends('layouts.app')

@section('title')
	Import Csv Claims
@endsection

@section('content')
	<div class="columns">
    <div class="column is-12">
        <div id="claims">
            <h1 class="title">Import Claims From XML</h1>
            <form method="POST" id="upload-form" enctype="multipart/form-data">
            	{{ csrf_field() }}
            <div class="file">
			  <label class="file-label">
			    <input class="file-input" type="file" name="xml" id="xml">
			    <span class="file-cta">
			      <span class="file-icon">
			        <i class="fa fa-upload"></i>
			      </span>
			      <span class="file-label">
			        Choose an XML file…
			      </span>
			    </span>
			  </label>
			</div>
			</form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
	<script type="text/javascript">
		document.getElementById('xml').onchange = function() {
			document.getElementById('upload-form').submit();
		}
	</script>
@endsection