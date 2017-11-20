data = [
    {id:0,name:'github',matchId:1},
    {id:1,name:'github',matchId:1},
    {id:2,name:'internet-explorer',matchId:2},
    {id:3,name:'internet-explorer',matchId:2},
    {id:4,name:'steam',matchId:3},
    {id:5,name:'steam',matchId:3},
    {id:6,name:'twitter',matchId:4},
    {id:7,name:'twitter',matchId:4},
    {id:8,name:'windows',matchId:5},
    {id:9,name:'windows',matchId:5},
    {id:10,name:'google',matchId:6},
    {id:11,name:'google',matchId:6},
    {id:12,name:'firefox',matchId:7},
    {id:13,name:'firefox',matchId:7},
    {id:14,name:'chrome',matchId:8},
    {id:15,name:'chrome',matchId:8},
    {id:16,name:'facebook-square',matchId:9},
    {id:17,name:'facebook-square',matchId:9},
    {id:18,name:'youtube-play',matchId:10},
    {id:19,name:'youtube-play',matchId:10}
];

global = {
    listCon: document.querySelector('.list-con'),
    judgeArr: []
};

function createLiNode(dataItem){
    const item = document.createElement('li');
    item.matchId = dataItem.matchId;
    item.ElementId = dataItem.id;
    item.correct = false;
    const str = `
	    <div class="card flipper-container">
	      <div class="flipper">
	  	<div class="front">
	  	</div>
	  	<div class="back">
	  	  <i class="fa fa-${dataItem.name} fa-5x" aria-hidden="true"></i>
	  	</div>
	      </div>
	    </div>
	  `;
    item.innerHTML = str;

    return item;
}

function createCards(data){
    const arr = data.slice().sort(function(){
	return Math.random() - 0.5;
    });
    arr.forEach(function(item){
	global.listCon.appendChild(createLiNode(item));
    });
}

createCards(data);

function rotate(){
    const listCon = document.querySelector('.list-con');
    const items = listCon.querySelectorAll('li');
    [...items].forEach(function(item){
	decide(item);
    });
};

rotate();


function decide(item){
    const flipper = item.querySelector('.flipper');
    item.onclick = function(){
	flipper.className='flipper active';
	if(!item.correct){
	    global.judgeArr.push(item);
	    if(global.judgeArr.length== 2){
		if(global.judgeArr[0].matchId !== global.judgeArr[1].matchId){
		    judge(global.judgeArr,false);	    
		}else{
		    console.log('ถิมห');
		    item.correct = true;
		    judge(global.judgeArr,true);
		}
		global.judgeArr.length=0;
	    }
	}
    };
}


function judge(arr,onOff){
    global.judgeArr.forEach(function(item){
	console.log(item);
	const flipper = item.querySelector('.flipper');
	if(!onOff){
	    setTimeout(function(){
		flipper.className = 'flipper wrong';
	    },1000);

	}else{
	    setTimeout(function(){
		flipper.className = 'flipper correct'; 
	    },1000);
	}
    });
}
