const observer = new MutationObserver(function (mutations) {
    // output
    $('div.p-Widget.jp-OutputArea').addClass('output').removeClass('jp-OutputArea');
    // output_area
    $('div.p-Widget.jp-OutputArea-child').addClass('output_area').removeClass('jp-OutputArea-child');
    // prompt
    $('div.p-Widget.jp-OutputPrompt').addClass('prompt').removeClass('jp-OutputPrompt');
    $('div.p-Widget.jp-OutputArea-prompt').removeClass('jp-OutputArea-prompt');
    // subarea 
    // output_subarea output_stream output_stdout( or output_error) output_text
    // jp-RenderedHTMLCommon jp-RenderedHTML jp-mod-trusted jp-OutputArea-output
    $('div.p-Widget.jp-RenderedHTMLCommon').addClass('output_subarea').removeClass('jp-RenderedHTMLCommon');
    $('div.p-Widget.jp-RenderedHTML').removeClass('jp-RenderedHTML');
    $('div.p-Widget.jp-mod-trusted').removeClass('jp-mod-trusted');
    $('div.p-Widget.jp-OutputArea-output').removeClass('jp-OutputArea-output');
  });
    


observer.observe(document.documentElement, 
    {childList: true,
    subtree: true,
    characterDataOldValue: true});