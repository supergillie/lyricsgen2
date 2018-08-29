@Test
public void getSentenceShouldReturnStringContainingWords {

   // Abstract method getSentence is tested
   String testSentence = LyricsFactory.getSentence();

   // Tests
   assertIsTrue(testSentence.matches(".*\\s+.*")); //sentence contains more than 2 words (= one blank space)
   assertIsTrue(Character.isUpperCase(testSentence.charAt(0)));
   assertEquals(testSentence.EndsWith("."));
 } 
