Vue.createApp({
    data(){
        return {
          timer:null,
          time:'',
          min:'',
          sec:'',
          state:'',
          colon:'',
        };     
    },
    methods:{
      init(){
        clearInterval(this.timer);
        this.time='';
        this.min='';
        this.sec='';
        this.colon='';
        this.state=''; 
      },
      fifteen_btn(){
        this.init();
        this.time=900;
        this.min = parseInt(this.time/60); 
        this.sec = this.time%60;
        if(this.sec < 10){
          this.sec = '0' + this.sec;
        }
        this.colon=':';
        this.timer=setInterval(this.countdown, 1000);
      },
      thirty_btn(){
        this.init();
        this.time=1800;
        this.min = parseInt(this.time/60); 
        this.sec = this.time%60;
        if(this.sec < 10){
          this.sec = '0' + this.sec;
        }
        this.colon = ':';
        this.timer=setInterval(this.countdown, 1000);
      },
      forty_five_btn(){
        this.init();
        this.time=2700;
        this.min = parseInt(this.time/60); 
        this.sec = this.time%60;
        if(this.sec < 10){
          this.sec = '0' + this.sec;
        }
        this.colon = ':';
        this.timer=setInterval(this.countdown, 1000);
      },      
      countdown(){  
        this.time--;       
        this.min = parseInt(this.time/60); 
        this.sec = this.time%60;
        if(this.sec < 10){
          this.sec = '0' + this.sec;
        }         
        if(this.time==-1){
          this.time='';
          this.min='';
          this.sec='';
          this.colon = '';
          this.state = '完成'; 
          clearInterval(this.timer);        
        }  
      },   
    },
    mounted(){      
    }    
}).mount('#app')