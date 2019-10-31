Search.setIndex({docnames:["implementation/GCS","implementation/MainModel","implementation/ResourceModel","implementation/driver","implementation/driver/AerialVehicle","implementation/driver/Command","implementation/driver/Payload","implementation/driver/PayloadDrivers","implementation/driver/Platform","implementation/driver/PlatformDrivers","implementation/driver/PlatformModel","implementation/driver/RecordingPayload","implementation/driver/SerialPlatform","implementation/driver/ToggleablePayload","implementation/driver/Vehicle","implementation/driver/channel/ChannelFactory","implementation/driver/channel/SerialDataChannel","implementation/driver/channel/SerialDataChannelFactory","implementation/driver/channel/UdpDataChannel","implementation/driver/channel/UdpDataChannelFactory","implementation/driver/generic/NullCommand","implementation/driver/generic/payload/NullPayload","implementation/driver/generic/platform/NullPlatform","implementation/driver/mavlink/MAVLinkCommand","implementation/driver/mavlink/MAVLinkPayload","implementation/driver/mavlink/MAVLinkPlatform","implementation/driver/mavlink/payload/Gripper","implementation/driver/mavlink/payload/RadiationSensor","implementation/driver/mavlink/platform/BasicPlatform","implementation/driver/mavlink/platform/MissionExecution","implementation/driver/mavlink/platform/PixhawkPX4","implementation/driver/mavlink/support/MAVLinkExecution","implementation/driver/mavlink/support/MAVLinkTunnel","implementation/driver/mavlink/support/MessageID","implementation/driver/mavlink/support/Messages","implementation/driver/mavlink/support/NavigationFrame","implementation/driver/mavlink/support/VehicleMode","implementation/index","implementation/mission","implementation/mission/Execution","implementation/mission/Mission","implementation/mission/Need","implementation/mission/Result","implementation/mission/Scheduler","implementation/mission/access/NeedManager","implementation/mission/need/CallIn","implementation/mission/need/Mapping","implementation/mission/need/parameter/Cargo","implementation/mission/need/parameter/MapType","implementation/mission/need/parameter/Parameter","implementation/mission/need/parameter/Region","implementation/mission/need/parameter/Target","implementation/mission/need/task/LimitTravelSpeed","implementation/mission/need/task/MoveToPosition","implementation/mission/need/task/ReturnToHome","implementation/mission/need/task/RunPlan","implementation/mission/need/task/TakeOff","implementation/mission/need/task/Task","implementation/mission/need/task/ToggleSensor","implementation/mission/need/task/TriggerPayload","implementation/resource","implementation/resource/Capability","implementation/resource/CapabilityDescriptor","implementation/resource/LocalResource","implementation/resource/Resource","implementation/resource/ResourceManager","implementation/support","implementation/support/concurrent/Concurrent","implementation/support/file/Plan","implementation/support/geo/GPSPosition","implementation/support/geo/WGS89Position","implementation/support/osmdroid/CircleOverlay","implementation/support/usb/DeviceHandler","implementation/ui","implementation/ui/MainActivity","implementation/ui/MenuFragmentID","implementation/ui/SettingsActivity","implementation/ui/mission/MissionItem","implementation/ui/mission/MissionsFragment","implementation/ui/mission/MissionsRecyclerViewAdapter","implementation/ui/mission/need/NeedInstructionFragment","implementation/ui/mission/need/NeedInstructionRecyclerViewAdapter","implementation/ui/mission/need/NeedItem","implementation/ui/mission/need/NeedItemFactory","implementation/ui/mission/need/NeedsFragment","implementation/ui/mission/need/NeedsRecyclerViewAdapter","implementation/ui/mission/need/parameter/ParameterItem","implementation/ui/mission/need/parameter/ParameterItemFactory","implementation/ui/mission/need/parameter/configurator/CargoConfigurator","implementation/ui/mission/need/parameter/configurator/MapTypeConfigurator","implementation/ui/mission/need/parameter/configurator/RegionConfigurator","implementation/ui/mission/need/parameter/configurator/TargetConfigurator","implementation/ui/settings/SettingsFragment","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["implementation/GCS.rst","implementation/MainModel.rst","implementation/ResourceModel.rst","implementation/driver.rst","implementation/driver/AerialVehicle.rst","implementation/driver/Command.rst","implementation/driver/Payload.rst","implementation/driver/PayloadDrivers.rst","implementation/driver/Platform.rst","implementation/driver/PlatformDrivers.rst","implementation/driver/PlatformModel.rst","implementation/driver/RecordingPayload.rst","implementation/driver/SerialPlatform.rst","implementation/driver/ToggleablePayload.rst","implementation/driver/Vehicle.rst","implementation/driver/channel/ChannelFactory.rst","implementation/driver/channel/SerialDataChannel.rst","implementation/driver/channel/SerialDataChannelFactory.rst","implementation/driver/channel/UdpDataChannel.rst","implementation/driver/channel/UdpDataChannelFactory.rst","implementation/driver/generic/NullCommand.rst","implementation/driver/generic/payload/NullPayload.rst","implementation/driver/generic/platform/NullPlatform.rst","implementation/driver/mavlink/MAVLinkCommand.rst","implementation/driver/mavlink/MAVLinkPayload.rst","implementation/driver/mavlink/MAVLinkPlatform.rst","implementation/driver/mavlink/payload/Gripper.rst","implementation/driver/mavlink/payload/RadiationSensor.rst","implementation/driver/mavlink/platform/BasicPlatform.rst","implementation/driver/mavlink/platform/MissionExecution.rst","implementation/driver/mavlink/platform/PixhawkPX4.rst","implementation/driver/mavlink/support/MAVLinkExecution.rst","implementation/driver/mavlink/support/MAVLinkTunnel.rst","implementation/driver/mavlink/support/MessageID.rst","implementation/driver/mavlink/support/Messages.rst","implementation/driver/mavlink/support/NavigationFrame.rst","implementation/driver/mavlink/support/VehicleMode.rst","implementation/index.rst","implementation/mission.rst","implementation/mission/Execution.rst","implementation/mission/Mission.rst","implementation/mission/Need.rst","implementation/mission/Result.rst","implementation/mission/Scheduler.rst","implementation/mission/access/NeedManager.rst","implementation/mission/need/CallIn.rst","implementation/mission/need/Mapping.rst","implementation/mission/need/parameter/Cargo.rst","implementation/mission/need/parameter/MapType.rst","implementation/mission/need/parameter/Parameter.rst","implementation/mission/need/parameter/Region.rst","implementation/mission/need/parameter/Target.rst","implementation/mission/need/task/LimitTravelSpeed.rst","implementation/mission/need/task/MoveToPosition.rst","implementation/mission/need/task/ReturnToHome.rst","implementation/mission/need/task/RunPlan.rst","implementation/mission/need/task/TakeOff.rst","implementation/mission/need/task/Task.rst","implementation/mission/need/task/ToggleSensor.rst","implementation/mission/need/task/TriggerPayload.rst","implementation/resource.rst","implementation/resource/Capability.rst","implementation/resource/CapabilityDescriptor.rst","implementation/resource/LocalResource.rst","implementation/resource/Resource.rst","implementation/resource/ResourceManager.rst","implementation/support.rst","implementation/support/concurrent/Concurrent.rst","implementation/support/file/Plan.rst","implementation/support/geo/GPSPosition.rst","implementation/support/geo/WGS89Position.rst","implementation/support/osmdroid/CircleOverlay.rst","implementation/support/usb/DeviceHandler.rst","implementation/ui.rst","implementation/ui/MainActivity.rst","implementation/ui/MenuFragmentID.rst","implementation/ui/SettingsActivity.rst","implementation/ui/mission/MissionItem.rst","implementation/ui/mission/MissionsFragment.rst","implementation/ui/mission/MissionsRecyclerViewAdapter.rst","implementation/ui/mission/need/NeedInstructionFragment.rst","implementation/ui/mission/need/NeedInstructionRecyclerViewAdapter.rst","implementation/ui/mission/need/NeedItem.rst","implementation/ui/mission/need/NeedItemFactory.rst","implementation/ui/mission/need/NeedsFragment.rst","implementation/ui/mission/need/NeedsRecyclerViewAdapter.rst","implementation/ui/mission/need/parameter/ParameterItem.rst","implementation/ui/mission/need/parameter/ParameterItemFactory.rst","implementation/ui/mission/need/parameter/configurator/CargoConfigurator.rst","implementation/ui/mission/need/parameter/configurator/MapTypeConfigurator.rst","implementation/ui/mission/need/parameter/configurator/RegionConfigurator.rst","implementation/ui/mission/need/parameter/configurator/TargetConfigurator.rst","implementation/ui/settings/SettingsFragment.rst","index.rst"],objects:{"":{"arm()":[25,2,1,""],"changeAltitude(altitude:)":[4,2,1,""],"class Cargo":[47,3,1,""],"class MainModel":[1,3,1,""],"class MainModelEvent":[1,3,1,""],"class MapType":[48,3,1,""],"class Mapping":[46,3,1,""],"class Mission":[40,3,1,""],"class MissionsFragment":[78,3,1,""],"class NeedsFragment":[84,3,1,""],"class Region":[50,3,1,""],"class SerialDataChannel":[16,3,1,""],"class Target":[51,3,1,""],"constructor(descriptor:value:)":[61,0,1,""],"constructor(fPort:)":[16,0,1,""],"constructor(id:component:)":[34,0,1,""],"constructor(id:frame:param1:param2:param3:param4:x:y:z:)":[23,0,1,""],"constructor(id:type:)":[62,0,1,""],"constructor(latitude:longitude:altitude:)":[70,0,1,""],"constructor(mission:)":[1,0,1,""],"constructor(name:system:data:)":[23,0,1,""],"constructor(need:)":[40,0,1,""],"constructor(position:)":[70,0,1,""],"constructor(result:)":[1,0,1,""],"create(context:port:configuration:)":[16,4,1,""],"createArmMessage(sender:target:schema:)":[34,2,1,""],"createDisarmMessage(sender:target:schema:)":[34,2,1,""],"createHeartbeatMessage(sender:schema:)":[34,2,1,""],"createRequestAutopilotCapabilitiesMessage(sender:target:schema:)":[34,2,1,""],"data_class Altitude":[4,5,1,""],"data_class Capability":[61,5,1,""],"data_class CapabilityDescriptor":[62,5,1,""],"data_class GPSPosition":[69,5,1,""],"data_class MAVLinkSystem":[34,5,1,""],"data_class MissionAvailable":[1,5,1,""],"data_class NeedAvailable":[1,5,1,""],"data_class NeedConfigurationStarted":[1,5,1,""],"data_class NeedUnavailable":[1,5,1,""],"data_class PayloadCommand":[23,5,1,""],"data_class PlanCommand":[23,5,1,""],"data_class ResultAvailable":[1,5,1,""],"data_class WGS89Position":[70,5,1,""],"disarm()":[25,2,1,""],"enum_class MessageID":[33,6,1,""],"enum_class Status":[64,6,1,""],"enum_class VehicleMode":[36,6,1,""],"executeOn(resource:)":[57,2,1,""],"has(capability:)":[64,2,1,""],"interface AerialVehicle":[4,7,1,""],"interface MAVLinkPlatform":[25,7,1,""],"interface Need":[41,7,1,""],"interface Parameter":[49,7,1,""],"interface Platform":[8,7,1,""],"interface Resource":[64,7,1,""],"interface SerialPlatform":[12,7,1,""],"interface Task":[57,7,1,""],"interface Vehicle":[14,7,1,""],"land()":[4,2,1,""],"limitTravelSpeed(speed:)":[14,2,1,""],"markAs(status:)":[64,2,1,""],"moveTo(position:)":[14,2,1,""],"object MissionOverviewRequested":[1,8,1,""],"object NeedConfigurationAborted":[1,8,1,""],"object NeedConfigurationFinished":[1,8,1,""],"object NeedOverviewRequested":[1,8,1,""],"resultToString()":[49,2,1,""],"returnToHome()":[14,2,1,""],"returnToLaunch()":[4,2,1,""],"send(message:)":[25,2,1,""],"submit(event:)":[1,2,1,""],"takeOff(altitude:)":[4,2,1,""],activeMenuFragment:[1,1,1,""],activeNeed:[1,1,1,""],availableNeeds:[1,1,1,""],capabilities:[64,1,1,""],currentPosition:[8,1,1,""],driverId:[8,1,1,""],execution:[8,1,1,""],id:[64,1,1,""],isAlive:[8,1,1,""],isAvailable:[64,1,1,""],missions:[1,1,1,""],name:[8,1,1,""],parameterList:[41,1,1,""],payloadDrivers:[64,1,1,""],payloadTunnels:[25,1,1,""],payloads:[8,1,1,""],plaform:[64,9,1,""],platformDriver:[64,1,1,""],requirements:[41,1,1,""],resource:[41,1,1,""],result:[49,9,1,""],schema:[25,1,1,""],senderSystem:[25,1,1,""],status:[64,1,1,""],targetSystem:[25,1,1,""],tasks:[41,1,1,""]},Altitude:{"constructor(meters:)":[4,0,1,""]}},objnames:{"0":["kotlin","constructor","Kotlin constructor"],"1":["kotlin","val","Kotlin constant"],"2":["kotlin","fun","Kotlin fun"],"3":["kotlin","class","Kotlin class"],"4":["kotlin","static_fun","Kotlin static fun"],"5":["kotlin","data_class","Kotlin data class"],"6":["kotlin","enum_class","Kotlin enum class"],"7":["kotlin","interface","Kotlin interface"],"8":["kotlin","object","Kotlin object"],"9":["kotlin","var","Kotlin variable"]},objtypes:{"0":"kotlin:constructor","1":"kotlin:val","2":"kotlin:fun","3":"kotlin:class","4":"kotlin:static_fun","5":"kotlin:data_class","6":"kotlin:enum_class","7":"kotlin:interface","8":"kotlin:object","9":"kotlin:var"},terms:{"abstract":[40,57,64],"boolean":[8,64],"byte":16,"class":[1,4,16,23,33,34,36,40,46,47,48,50,51,61,62,64,69,70,78,84],"enum":[33,36,64],"float":[23,69],"function":[4,14],"int":[34,70],"long":34,"new":[1,16,34],"null":[8,41],"return":[4,8,14,34,41,64],"static":16,"true":64,"var":[49,64],GCS:25,GPS:[14,69],IDs:33,IFS:[1,4,8,12,14,16,25,34,36,40,41,46,47,48,50,51,57,61,62,64,69,70],The:[1,4,8,14,16,25,34,41,49,57,64],about:64,access:[8,37,38],acquir:64,activ:1,activemenufrag:1,activene:1,add:78,addess:25,addit:78,addition:8,aerial:4,aerialvehicl:[3,25,37],all:[1,4,8,14],allow:[8,64],altitud:[4,69,70],ani:[23,64],api:25,applic:[1,16],arm:[25,34],arriv:1,associ:[25,41],attach:[8,16,25],author:[1,4,8,12,14,16,25,34,36,40,41,46,47,48,50,51,57,61,62,64,69,70],auto_arm:36,auto_disarm:36,autopilot:34,autopilot_vers:33,avail:[1,64],availablene:1,availableresourc:61,base:[41,49,61],basic:57,basicplatform:[3,37],becom:1,been:[1,8],being:1,brief:23,busi:64,button:78,bytechannel:[],callin:[37,38],can:[8,36,61,64],capabilitydescriptor:[37,60,61],capabl:[34,37,41,57,60,62,64],cargo:[37,38],cargoconfigur:[37,73],certain:46,chang:[4,64],changealtitud:4,channel:[3,37],channelfactori:[3,37],check:[8,64],combin:78,command:[3,4,8,14,23,34,37,40,57],command_ack:33,command_long:33,common:[4,14],commonli:33,commonplatform:[],commun:[8,16],complet:[41,49],compon:34,concret:41,concurr:[37,66],configur:[1,16,37,47,48,49,51,73],connect:[1,12],constructor:[1,4,16,23,34,40,46,61,62,69,70],contain:34,content:[3,37,38,60,66,73,93],context:16,convert:[69,70],coordin:[69,70],coupl:8,creat:[16,34,48],createarmmessag:34,createdisarmmessag:34,createheartbeatmessag:34,createrequestautopilotcapabilitiesmessag:34,current:[1,8],currentposit:8,data:[1,4,23,34,61,62,69,70],defin:[1,4,14,50,62],deriv:1,describ:36,descriptor:[61,62],desir:[47,64],determin:8,devic:16,devicehandl:[37,66],directyli:25,disarm:[25,34],document:[3,37,38,60,66,73],doe:1,doubl:[4,14,69],driven:23,driver:[37,40,64,93],driverid:8,drone:8,each:[8,64],encapsul:40,enumer:[33,36],etc:8,event:[1,23],execut:[8,23,37,38,57],executeon:57,extended_sys_st:33,extern:23,facilit:[16,23],factivemenufrag:1,factivene:1,fail:64,fals:64,favailablene:1,file:[37,66],filter:[61,64],finish:1,fire:25,fmaptyp:46,fmission:1,forget:25,fport:16,fragment:[1,78,84],frame:23,fregion:46,from:1,fulfil:41,fun:[1,4,14,16,23,25,34,40,49,57,61,62,64,69,70],further:64,gcs:[],gener:[8,25,37,46,93],geo:[37,66],get:8,given:[4,8,14,16,57,62,64],global_position_int:33,gpsposit:[8,14,37,50,51,66,70],gripper:[3,37],guided_arm:36,guided_disarm:36,handl:[37,93],has:[1,8,50,62,64],have:12,heartbeat:[33,34],heat:46,hold:[69,70],how:23,hsr:[],identif:64,identifi:[1,12,25],iff:64,ifs:[],implement:[8,46,47,48,50,51,93],inform:64,infrastructur:[37,93],input:16,instanc:41,institut:[1,4,8,12,14,16,25,34,36,40,41,46,47,48,50,51,57,61,62,64,69,70],instruct:[4,14],integ:70,interest:1,interfac:[4,8,12,14,16,25,37,41,49,57,64,93],intermix:23,isal:8,isavail:64,item:[23,78,84],its:[4,14],itself:8,land:4,latitud:[69,70],launch:[4,14],level:57,limittravelspe:[14,37,38],list:[1,8,41,50,57,64,78,84],listen:1,livedata:1,localresourc:[37,60],logic:1,longcommand:23,longitud:[69,70],mai:[8,23],main:[1,4,16,23,34,40,46,61,62,69,70],mainact:[37,73],mainmodelev:1,make:1,manag:[37,93],manual_arm:36,manual_disarm:36,map:[23,25,48],maptyp:46,marka:64,mavlink:[3,37],mavlinkcommand:[3,25,37],mavlinkexecut:[3,37],mavlinkmessag:[25,34],mavlinkmissioncommand:[],mavlinkpayload:[3,37],mavlinkplatform:[3,37],mavlinkschema:[25,34],mavlinksystem:[23,25,34],mavlinktunnel:25,maximum:14,menu:1,menufragmentid:[1,37,73],messag:[3,23,25,33,37],messageid:[3,37],meter:4,minim:8,mission:[1,8,23,37,73,93],mission_ack:33,mission_count:33,mission_curr:33,mission_item:33,mission_item_reach:33,mission_request:33,missionavail:1,missionoverviewrequest:1,mode:[36,46],model:1,move:14,moveto:14,movetoposit:[37,38],must:1,name:[8,23],nativecommand:34,navigationfram:[3,23,37],necessari:41,need:[1,37,38,40,73,78],needavail:1,needconfigurationabort:1,needconfigurationfinish:1,needconfigurationstart:1,needinstructionfrag:[37,73],needinstructionrecyclerviewadapt:[37,73],needitem:[37,73],needitemfactori:[37,73],needmanag:[37,38],needoverviewrequest:1,needsfrag:[37,73],needsrecyclerviewadapt:[37,73],needunavail:1,never:23,nullcommand:[],nullpayload:[],nullplatform:[],number:8,object:1,off:4,one:64,orient:16,otherwis:64,output:16,outsid:[1,23],overrid:46,overview:1,param1:23,param2:23,param3:23,param4:23,paramet:[16,34,37,38,41,57,64,73],parameteritem:[37,73],parameteritemfactori:[37,73],parameterlist:41,part:23,payload:[3,8,23,25,37,64],payloadcommand:23,payloaddriv:64,payloaddriverid:[],payloadprovid:[],payloadtunnel:25,perform:8,ping:33,pixhawkpx4:[3,37],place:50,plaform:64,plan:[23,37,66],plancommand:23,platform:[3,12,14,23,25,37,64],platformdriv:64,platformmanag:[],platformmodel:[3,37],point:69,port:16,posit:[4,8,14,69,70],preflight:36,prevent:25,provid:[1,8,16,46,49,61,64],queri:8,radiat:46,recycl:41,region:[37,38,46],regionconfigur:[37,73],repres:[4,34,41,46,49,78,84],represent:[49,64],request:34,requir:41,resourc:[37,41,46,57,93],resourcemanag:[37,60],respect:23,result:[1,37,38,49],resultavail:1,resulttostr:49,retriev:8,returntohom:[14,37,38],returntolaunch:4,rover:8,runplan:[37,38],scale:70,schedul:[37,38],schema:[25,34],seal:1,select:1,send:25,sender:34,sendersystem:25,sens:1,serial:[12,16],serialdatachannel:[3,37],serialdatachannelfactori:[3,37],serialplatform:[3,25,37],set:[14,37,73],set_mod:33,settingsact:[37,73],settingsfrag:[37,73],sever:64,shall:[8,23],share:[4,8,14],should:57,shown:49,signal:1,simpl:[34,69,70],sinc:[1,4,8,12,14,16,23,25,33,34,36,40,41,46,47,48,49,50,51,57,61,62,64,69,70],singl:49,softwar:[1,4,8,12,14,16,25,34,36,40,41,46,47,48,50,51,57,61,62,64,69,70],some:8,sort:8,specif:8,specifi:[4,8,25,57],speed:14,stabilize_arm:36,stabilize_disarm:36,start:1,state:64,statu:[64,78],strategi:8,string:[8,23,41,47,48,49,62,64],structur:[41,49],submarin:8,submit:1,subset:8,subsystem:[37,93],support:[3,8,37,93],system:[1,23,25,34],tag:[1,12],take:[4,50],takeoff:[4,25,37,38],target:[25,34,37,38],targetconfigur:[37,73],targetsystem:25,task:[8,37,38,40,41],test_arm:36,test_disarm:36,thei:[23,61],thi:[1,4,8,12,14,16,23,25,36,41,46,47,48,49,50,51,57,64],through:8,tick:23,translat:[40,41],travel:14,triggerpayload:[37,38],tunnel:[25,33],type:[1,23,34,48,61,62,69,70],unavail:[1,64],underli:1,uniqu:[41,64],unman:8,upload:23,usb:[16,37,66],usbserialport:16,use:16,used:[1,12,25,33,47,48,50,51],user:[1,37,49,93],using:46,val:[1,8,25,41,46,64],valu:[4,34,61,69,70],vehicl:[3,4,8,12,23,25,33,36,37,47,48,51,57],vehiclemod:[3,37],view:41,wai:61,want:1,wgs89:70,wgs89posit:[37,66,69],what:[61,62],when:49,which:[8,50,57],work:8,yet:8},titles:["Documentation for GCS.kt","Documentation for MainModel.kt","Documentation for ResourceModel.kt","Driver Subsystem","Documentation for driver/AerialVehicle.kt","Documentation for driver/Command.kt","Documentation for driver/Payload.kt","Documentation for driver/PayloadDrivers.kt","Documentation for driver/Platform.kt","Documentation for driver/PlatformDrivers.kt","Documentation for driver/PlatformModel.kt","Documentation for driver/RecordingPayload.kt","Documentation for driver/SerialPlatform.kt","Documentation for driver/ToggleablePayload.kt","Documentation for driver/Vehicle.kt","Documentation for driver/channel/ChannelFactory.kt","Documentation for driver/channel/SerialDataChannel.kt","Documentation for driver/channel/SerialDataChannelFactory.kt","Documentation for driver/channel/UdpDataChannel.kt","Documentation for driver/channel/UdpDataChannelFactory.kt","Documentation for driver/generic/NullCommand.kt","Documentation for driver/generic/payload/NullPayload.kt","Documentation for driver/generic/platform/NullPlatform.kt","Documentation for driver/mavlink/MAVLinkCommand.kt","Documentation for driver/mavlink/MAVLinkPayload.kt","Documentation for driver/mavlink/MAVLinkPlatform.kt","Documentation for driver/mavlink/payload/Gripper.kt","Documentation for driver/mavlink/payload/RadiationSensor.kt","Documentation for driver/mavlink/platform/BasicPlatform.kt","Documentation for driver/mavlink/platform/MissionExecution.kt","Documentation for driver/mavlink/platform/PixhawkPX4.kt","Documentation for driver/mavlink/support/MAVLinkExecution.kt","Documentation for driver/mavlink/support/MAVLinkTunnel.kt","Documentation for driver/mavlink/support/MessageID.kt","Documentation for driver/mavlink/support/Messages.kt","Documentation for driver/mavlink/support/NavigationFrame.kt","Documentation for driver/mavlink/support/VehicleMode.kt","Implementation","Mission Handling Subsystem","Documentation for mission/Execution.kt","Documentation for mission/Mission.kt","Documentation for mission/Need.kt","Documentation for mission/Result.kt","Documentation for mission/Scheduler.kt","Documentation for mission/access/NeedManager.kt","Documentation for mission/need/CallIn.kt","Documentation for mission/need/Mapping.kt","Documentation for mission/need/parameter/Cargo.kt","Documentation for mission/need/parameter/MapType.kt","Documentation for mission/need/parameter/Parameter.kt","Documentation for mission/need/parameter/Region.kt","Documentation for mission/need/parameter/Target.kt","Documentation for mission/need/task/LimitTravelSpeed.kt","Documentation for mission/need/task/MoveToPosition.kt","Documentation for mission/need/task/ReturnToHome.kt","Documentation for mission/need/task/RunPlan.kt","Documentation for mission/need/task/TakeOff.kt","Documentation for mission/need/task/Task.kt","Documentation for mission/need/task/ToggleSensor.kt","Documentation for mission/need/task/TriggerPayload.kt","Resource Management Subsystem","Documentation for resource/Capability.kt","Documentation for resource/CapabilityDescriptor.kt","Documentation for resource/LocalResource.kt","Documentation for resource/Resource.kt","Documentation for resource/ResourceManager.kt","Generic Support Infrastructure","Documentation for support/concurrent/Concurrent.kt","Documentation for support/file/Plan.kt","Documentation for support/geo/GPSPosition.kt","Documentation for support/geo/WGS89Position.kt","Documentation for support/osmdroid/CircleOverlay.kt","Documentation for support/usb/DeviceHandler.kt","User Interface","Documentation for ui/MainActivity.kt","Documentation for ui/MenuFragmentID.kt","Documentation for ui/SettingsActivity.kt","Documentation for ui/mission/MissionItem.kt","Documentation for ui/mission/MissionsFragment.kt","Documentation for ui/mission/MissionsRecyclerViewAdapter.kt","Documentation for ui/mission/need/NeedInstructionFragment.kt","Documentation for ui/mission/need/NeedInstructionRecyclerViewAdapter.kt","Documentation for ui/mission/need/NeedItem.kt","Documentation for ui/mission/need/NeedItemFactory.kt","Documentation for ui/mission/need/NeedsFragment.kt","Documentation for ui/mission/need/NeedsRecyclerViewAdapter.kt","Documentation for ui/mission/need/parameter/ParameterItem.kt","Documentation for ui/mission/need/parameter/ParameterItemFactory.kt","Documentation for ui/mission/need/parameter/configurator/CargoConfigurator.kt","Documentation for ui/mission/need/parameter/configurator/MapTypeConfigurator.kt","Documentation for ui/mission/need/parameter/configurator/RegionConfigurator.kt","Documentation for ui/mission/need/parameter/configurator/TargetConfigurator.kt","Documentation for ui/settings/SettingsFragment.kt","HSR HMI for Android"],titleterms:{GCS:0,access:44,aerialvehicl:4,android:93,basicplatform:28,callin:45,capabilitydescriptor:62,capabl:61,cargo:47,cargoconfigur:88,channel:[15,16,17,18,19],channelfactori:15,circleoverlai:71,command:5,commonplatform:[],concurr:67,configur:[88,89,90,91],devicehandl:72,document:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,61,62,63,64,65,67,68,69,70,71,72,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92],driver:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],execut:39,file:68,gener:[20,21,22,66],geo:[69,70],gpsposit:69,gripper:26,handl:38,hmi:93,hsr:93,implement:37,infrastructur:66,interfac:73,limittravelspe:52,localresourc:63,longcommand:[],mainact:74,mainmodel:1,manag:60,map:46,maptyp:48,maptypeconfigur:89,mavlink:[23,24,25,26,27,28,29,30,31,32,33,34,35,36],mavlinkcommand:23,mavlinkexecut:31,mavlinkmissioncommand:[],mavlinkpayload:24,mavlinkplatform:25,mavlinktunnel:32,menufragmentid:75,messag:34,messageid:33,mission:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91],missionexecut:29,missionitem:77,missionsfrag:78,missionsrecyclerviewadapt:79,movetoposit:53,navigationfram:35,need:[41,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,80,81,82,83,84,85,86,87,88,89,90,91],needinstructionfrag:80,needinstructionrecyclerviewadapt:81,needitem:82,needitemfactori:83,needmanag:44,needsfrag:84,needsrecyclerviewadapt:85,nullcommand:20,nullpayload:21,nullplatform:22,osmdroid:71,paramet:[47,48,49,50,51,86,87,88,89,90,91],parameteritem:86,parameteritemfactori:87,payload:[6,21,26,27],payloaddriv:7,payloadprovid:[],pixhawkpx4:30,plan:68,platform:[8,22,28,29,30],platformdriv:9,platformmanag:[],platformmodel:10,radiationsensor:27,recordingpayload:11,region:50,regionconfigur:90,resourc:[60,61,62,63,64,65],resourcemanag:65,resourcemodel:2,result:42,returntohom:54,runplan:55,schedul:43,serialdatachannel:16,serialdatachannelfactori:17,serialplatform:12,set:92,settingsact:76,settingsfrag:92,subsystem:[3,38,60],support:[31,32,33,34,35,36,66,67,68,69,70,71,72],takeoff:56,target:51,targetconfigur:91,task:[52,53,54,55,56,57,58,59],toggleablepayload:13,togglesensor:58,triggerpayload:59,udpdatachannel:18,udpdatachannelfactori:19,usb:72,user:73,vehicl:14,vehiclemod:36,wgs89posit:70}})