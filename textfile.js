let text = document.getElementById('quote');

const quotes = [
  `Learning to type efficiently is a gradual process that requires patience, 
  consistency, and attention to detail. In the beginning, it is common to feel 
  slow or make frequent mistakes, but this phase is completely normal. Instead 
  of focusing only on speed, it is more important to develop accuracy and proper 
  finger placement. When accuracy improves, speed follows naturally. Regular practice 
  with meaningful text helps build muscle memory, making typing feel smoother and more 
  natural over time.`,

  `Technology has become an essential part of modern life, supporting education, communication,
  and productivity. People now have access to vast amounts of knowledge through digital platforms
  and online resources. However, the true benefit of technology depends on how it is used. Developing 
  the habit of focused and purposeful usage helps avoid distractions and allows technology to become a 
  powerful tool for learning and personal growth rather than a source of wasted time.`,

  `Early mornings offer a calm and distraction-free environment that is ideal for learning and practice. 
  During this time, the mind feels fresh, and concentration levels are usually higher. Many people find that 
  studying or practicing skills in the morning helps them stay consistent throughout the day. Establishing a 
  simple morning routine can improve discipline, productivity, and mental clarity.`,

  `Typing is an important skill for students, programmers, writers, and professionals across many fields. 
  Everyday tasks such as writing emails, creating documents, or coding applications rely heavily on efficient 
  typing. Practicing regularly with complete and meaningful sentences improves both speed and comprehension. 
  Over time, this practice reduces effort and allows the mind to focus more on ideas rather than individual 
  keystrokes.`,

  `Success is rarely the result of sudden achievement. It is built through small, consistent actions repeated over 
  a long period of time by the grace of Almighty Allah. Progress may sometimes feel slow, but every effort contributes 
  to improvement. Making mistakes is a natural part of learning, and each mistake provides valuable insight. Patience 
  and persistence are key qualities that help turn effort into meaningful results.`,

  `Reading is one of the most effective ways to expand knowledge and strengthen thinking ability. It improves vocabulary, 
  comprehension, and imagination. Regular reading also enhances focus and encourages reflection. Even dedicating a short 
  amount of time each day to reading can bring noticeable improvement in communication skills and overall understanding 
  of different subjects.`,

  `A clean and organized workspace has a strong impact on concentration and productivity. When the surrounding environment 
  is tidy, the mind feels less cluttered and more focused. Simple habits such as arranging tools properly and removing unnecessary 
  items can reduce stress and create a more comfortable atmosphere for learning or working for long periods.`,

  `Practicing typing with meaningful and well-structured text improves rhythm and flow. Instead of random letters, real sentences 
  help develop natural typing patterns. This method also strengthens reading comprehension and keeps practice sessions engaging. 
  Consistent practice gradually improves both speed and accuracy.`,

  `Maintaining healthy habits supports better performance during long study or work sessions. Drinking enough water, taking short 
  breaks, and maintaining proper posture help reduce fatigue. A healthy routine keeps the mind alert and improves focus, making learning 
  more effective and sustainable in the long run.`,

  `Modern communication includes emails like user@example.com, prices such as $49.99, dates like 12/08/2026, and codes like ID#A45X.
  Practicing these patterns helps improve typing accuracy for professional and technical environments.`,

  `It was 6:30 AM when Arif opened his laptop and typed his first line of code. He wondered, "Can I improve my typing speed to 60 WPM
  in 30 days?" The screen showed symbols like @, #, and $, while numbers such as 10, 20, and 50 appeared in practice sentences. Arif 
  smiled and asked himself, "Why not try again today?"`,

];


const generateTxt = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  let arr = quotes[randomIndex].trim().split(/\s+/).map((value)=>{
    return "<span class='quote-words'>"+value+"</span>";
  });
  text.innerHTML=arr.join(" ");
}

export { quotes, generateTxt };

// used split(/\s+/) to avoid one or more whitespace
