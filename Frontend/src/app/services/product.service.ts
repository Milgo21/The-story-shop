import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Books:Book[] = [
  {
    "booktitle":"The things you can only see when you slow down",
    "author":"Haemenim Sunim",
    "description":"The world moves fast, but that doesn't mean we have to. In this best-selling mindfulness guide - it has sold more than three million copies in Korea, where it was a number-one best-seller for 41 weeks and received multiple best book of the year awards - Haemin Sunim a renowned Buddhist meditation teacher born in Korea and educated in the United States, illuminates a path to inner peace and balance amid the overwhelming demands of everyday life. By offering guideposts to well-being and happiness in eight areas - including relationships, love, and spirituality - Haemin Sunim emphasizes the importance of forging a deeper connection with others and being compassionate and forgiving toward ourselves",
    "image":"https://rafubooks.com/media/bookimages/The_Things_you_can_only_see.jpg",
    "price":"500"
  },
  {
    "booktitle":"Should I ?, Your question about money",
    "author":"Florence Bett",
    "description":"You are in your 20`s or 30`s, You are working hard growing a decent career in your job or business. Making your own money. It`s all good. This is, you are expected to already know what to do with this money. Granted you know how to spend it buying things- hell, everybody does- but you don't know how to budget, save or invest it. Should I? Responds to these lingering questions about your personal finance. Questions such as,What should I know before joining a Sacco? Should a rookie like me put money in shares? Why am I so insecure when I don't have enough money? How am I always broke before my next payday? Should I borrow money from my woman? Bett is a certified accountant, a small business owner and a former financial auditor. She is also a personal finance columnist with Daily Nations Newspaper. Bett has drown from her personal experience and from engagements with her readers, to respond to your questions about how to make money and manage it smarter.",
    "image":"https://rafubooks.com/media/bookimages/WhatsApp_Image_2021-12-10_at_14.57.45.jpeg",
    "price":"1200"
  }

]
constructor() { }
addNewBook(addedBook:Book){
  this.Books.push(addedBook);
}
}
