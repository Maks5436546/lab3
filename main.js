// Ваш уявний колега вже визначив масив імен
var names = ["John", "Jane", "Jim", "Jerry", "Jack", "Potter"];

// Застосунок, який виводить hello або goodbye
function sayHelloOrGoodbye(name) {
  var firstLetter = name.charAt(0).toLowerCase();

  if (firstLetter === "j") {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}

// Викликаємо функцію для кожного імені
names.forEach(function (name) {
  sayHelloOrGoodbye(name);
});

// Додатковий функціонал для селекції імен
function selectNamesByCustomRule(names, rule) {
  var selectedNames = [];

  names.forEach(function (name) {
    if (rule(name)) {
      selectedNames.push(name);
    }
  });

  return selectedNames;
}

// Приклад додаткового функціоналу: вибір імен, які закінчуються на "n"
var namesEndingWithN = selectNamesByCustomRule(names, function (name) {
  return name.charAt(name.length - 1).toLowerCase() === "n";
});

// Вивід результатів
console.log("Names ending with 'n':", namesEndingWithN);