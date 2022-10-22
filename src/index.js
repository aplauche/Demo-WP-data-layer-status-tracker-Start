import { render } from '@wordpress/element';


function StatusTrackerApp() {

  return (
    <div></div>
  );
}



// Load in our react app to the DOM
window.addEventListener(
    'load',
    function () {
        render(
            <StatusTrackerApp />,
            document.querySelector( '#fsd-page-status-tracker' )
        );
    },
    false
);