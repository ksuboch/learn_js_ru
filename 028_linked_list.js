var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Напишите функцию printList(list), 
// которая выводит элементы списка по очереди, 
// при помощи цикла.

function printList(lst) {
	var curElem = lst;
	while (curElem) {
		console.log(curElem.value);
		curElem = curElem.next;
	}
}

printList(list)

// Напишите функцию printList(list) при помощи рекурсии.

function printListR(lst) {
	if (lst) {
		console.log(lst.value);
		printListR(lst.next);
	}
}

printListR(list);

// Напишите функцию printReverseList(list), которая выводит элементы списка 
// в обратном порядке, при помощи рекурсии.

function printReverseListR(lst) {
	if (lst.next) {
		printReverseListR(lst.next);
	}
	console.log(lst.value);
}

printReverseListR(list);

// Сделайте вариант printReverseList(list), 
// использующий не рекурсию, а цикл.

function printReverseList(lst) {
	var p = lst, pPrinted;
	while(p.next) {
		p = p.next;
	}
	while (pPrinted != lst) {
		console.log(p.value);
		pPrinted = p;

		p = lst;
		while (p.next && p.next != pPrinted) {
			p = p.next;
		}
	}
}

printReverseList(list);