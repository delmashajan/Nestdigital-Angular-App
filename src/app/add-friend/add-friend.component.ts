import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  readValues=()=>{
    let data:any={"name":this.name,"friendName":this.friendName,
    "DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
    console.log(data)
  }




}
