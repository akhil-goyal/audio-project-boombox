document.onreadystatechange = () => {

    if (document.readyState === 'loading') {
        console.log('LOADING STATE ...');
    } else if (document.readyState === 'interactive') {
        console.log('INTERACTIVE STATE');
    } else if (document.readyState === 'complete') {
        console.log('LOADED STATE');
    } else {
        console.log('SOME OTHER STATE!');
    }

}