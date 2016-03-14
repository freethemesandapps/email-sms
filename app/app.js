var app = angular.module('myApp', []);

app.controller('appController', function($scope, $http){

	

	$scope.carriers = [
     			  
{id:'1',name:'All Carrier',email:'email.experttexting.com'},
{id:'2',name:'Aircel',email:'aircel.co.in'},
{id:'3',name:'Airtel',email:'airtelap.com'},
{id:'4',name:'Airtel',email:'airtelkk.com'},
{id:'5',name:'Airfire Mobile',email:'sms.airfiremobile.com'},
{id:'6',name:'Alaska Communications',email:'msg.acsalaska.com'},
{id:'7',name:'Aliant',email:'sms.wirefree.informe.ca'},
{id:'8',name:'Alltel',email:'sms.alltelwireless.com'},
{id:'11',name:'Ameritech',email:'paging.acswireless.com'},
{id:'12',name:'Andhra Pradesh Idea Cellular',email:'ideacellular.net'},
{id:'13',name:'Api4SMS',email:'members.api4sms.net'},
{id:'14',name:'aql',email:'text.aql.com'},
{id:'15',name:'Assurance Wireless',email:'vmobl.com'},
{id:'18',name:'AT&T',email:'txt.att.net'},
{id:'26',name:'Beeline (Russia)',email:'sms.beemail.ru'},
{id:'27',name:'Bell Mobility & Solo Mobile',email:'txt.bell.ca'},
{id:'29',name:'BellSouth',email:'bellsouth.cl'},
{id:'31',name:'Bluegrass Cellular',email:'sms.bluecell.com'},
{id:'33',name:'Bluesky Communications',email:'psms.bluesky.as'},
{id:'34',name:'Boost Mobile',email:'sms.myboostmobile.com'},
{id:'57',name:'Claro',email:'clarotorpedo.com.br'},
{id:'65',name:'Cricket',email:'sms.mycricket.com'},
{id:'67',name:'C Spire Wireless',email:'cspire1.com'},
{id:'78',name:'Element Mobile',email:'SMS.elementmobile.net'},
{id:'79',name:'Emtel',email:'emtelworld.net'},
{id:'80',name:'Esendex',email:'echoemail.net'},
{id:'88',name:'Freebie SMS',email:'smssturen.com'},
{id:'89',name:'General Communications Inc.',email:'mobile.gci.net'},
{id:'90',name:'Globalstar (satellite)',email:'msg.globalstarusa.com'},
{id:'93',name:'Goa Idea Cellular',email:'ideacellular.net'},
{id:'94',name:'Golden State Cellular',email:'gscsms.com'},
{id:'95',name:'Greatcall',email:'vtxt.com'},
{id:'96',name:'Gujarat Idea Cellular',email:'ideacellular.net'},
{id:'106',name:'ICE',email:'sms.ice.cr'},
{id:'109',name:'i-wireless (Sprint PCS)',email:'iwirelesshometext.com'},
{id:'110',name:'Kajeet',email:'mobile.kajeet.net'},
{id:'115',name:'Koodo Mobile',email:'msg.telus.com'},
{id:'116',name:'LongLines',email:'text.longlines.com'},
{id:'117',name:'Lynx Mobility',email:'sms.lynxmobility.com'},
{id:'118',name:'M1',email:'m1.com.sg'},
{id:'121',name:'Maharashtra Idea Cellular',email:'ideacellular.net'},
{id:'122',name:'Más Móvil',email:'cwmovil.com'},
{id:'123',name:'Mediaburst',email:'sms.mediaburst.co.uk'},
{id:'127',name:'MetroPCS',email:'mymetropcs.com'},
{id:'132',name:'Movistar',email:'sms.movistar.net.ar'},
{id:'138',name:'MTS Mobility',email:'text.mtsmobility.com'},
{id:'141',name:'My-Cool-SMS',email:'my-cool-sms.com'},
{id:'143',name:'Nextech',email:'sms.ntwls.net'},
{id:'144',name:'Nextel',email:'msgnextel.com.mx'},
{id:'151',name:'Orange',email:'orange.net'},
{id:'183',name:'Sprint',email:'messaging.sprintpcs.com'},
{id:'190',name:'Syringa Wireless',email:'rinasms.com'},
{id:'192',name:'T-Mobile',email:'tmomail.net'},
{id:'201',name:'Telecom New Zealand',email:'etxt.co.nz'},
{id:'202',name:'Teleflip',email:'teleflip.com'},
{id:'205',name:'All Australian Mobile Networks',email:'sms.itcompany.com.au'},
{id:'206',name:'Telus Mobility',email:'msg.telus.com'},
{id:'208',name:'TellusTalk',email:'esms.nu'},
{id:'213',name:'TIM',email:'timnet.com'},
{id:'214',name:'Ting',email:'message.ting.com'},
{id:'223',name:'Telcel',email:'itelcel.com'},
{id:'229',name:'US Cellular',email:'email.uscc.net'},
{id:'231',name:'USA Mobility',email:'usamobility.net'},
{id:'232',name:'UTBox',email:'sms.utbox.net'},
{id:'234',name:'Verizon Wireless',email:'vtext.com'},
{id:'238',name:'Vivo',email:'torpedoemail.com.br'},
{id:'240',name:'Virgin Mobile',email:'vmobl.com'},
{id:'243',name:'Vodacom',email:'voda.co.za'},
{id:'250',name:'Voyager Mobile',email:'text.voyagermobile.com'},
{id:'251',name:'West Central Wireless',email:'sms.wcc.net'},
{id:'252',name:'Wind Mobile',email:'txt.windmobile.ca'},
{id:'253',name:'XIT Communications',email:'sms.xit.net'}


			  ];
      

 	$scope.sendText = function (txt){
		 if(window.location.href.indexOf('index.html') > -1) // or 0
                 window.location.href = window.location.href.replace('index.html', '');
      		var request = $http({
          		method: "post",
			url: window.location.href + "ajax/stxt.php",
          		data: {
              			name: txt.name,
              			email: txt.email,
	      			carrier: txt.carrier.email,
	      			number: txt.number,
	      			message: txt.message
           			},
          		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        	});
       	 	request.success(function (data) {
            		$scope.msg = " Text message sent successfully!";
            		
        	});
		
	};
		
});
