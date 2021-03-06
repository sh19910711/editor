(function() {
  "use strict"

  $(function() {
    const editor = ace.edit('editor')
    editor.setTheme('ace/theme/solarized_light')
    editor.setFontSize(18);

    const content = $('#entity_content')
    content.hide()
    const path = $('#entity_path')

    const session = editor.getSession()
    updatePath(path.val())
    $('#entity_path').on('change', function() {
      updatePath(path.val())
    });
    session.setUseSoftTabs(false);
    session.setValue(content.val())
    session.on('change', function() {
      content.val(session.getValue())
    })

    function updatePath(path) {
      switch (path.split('.').pop()) {
        case 'js':
          session.setMode('ace/mode/javascript')
          break
        case 'c':
        case 'cpp':
          session.setMode('ace/mode/c_cpp')
          break
      }
    }
  })
})()
