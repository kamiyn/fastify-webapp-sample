SuiteOf('スモークテスト'); // Feature は Scenario をまとめたもの

// Scenario は1つのテストケース
Scenario('example.comにアクセスする', ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain')
});
