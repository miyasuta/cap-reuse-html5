sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'miyasuta/managebooks/test/integration/FirstJourney',
		'miyasuta/managebooks/test/integration/pages/BooksList',
		'miyasuta/managebooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('miyasuta/managebooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);