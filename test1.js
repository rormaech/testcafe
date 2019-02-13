import Page from './page-model';

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`;

//Page model
const page = new Page();


test('My first test', async t=>{
  //test code
  await t
    .typeText(page.nameInput,'John Smith')
    .click(page.submitButton)
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(page.articleHeader.innerText).eql('Thank you, John Smith!');

  /*
  const articleHeader = await Selector('.result-content').find('h1');
  //Obtain the text of the article header
  let headerText = await articleHeader.innerText;
  */
});


test('Text typing basics', async t =>{
  await t
    .typeText(page.nameInput,'Peter')
    .typeText(page.nameInput,'Paker',{replace:true})
    .typeText(page.nameInput,'r',{caretPos:2})
    .expect(page.nameInput.value).eql('Parker');
});


test('Click an array of labels and then check their states', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});
