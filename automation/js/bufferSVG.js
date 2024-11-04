rules.JSRule({
  name: "BufferSVGEvent",
  description: "This rule will trigger when boiler temperature changes",
  triggers: [triggers.ItemStateChangeTrigger('BufferTemperature')],
  execute: (event) => {
/*
Code Start
*/
const temp_name = "BufferTemperature";
const url_name = "BufferURL";
const level_name = "BufferLEVEL";
const ip = "xxx.xxx.xxx.xxx";
const min_temp = 40;
const max_temp = 80;

let procent=0;
let offset1=0;
let offset2=0;
let color1="red";
let color2="blue";

let temp_value = items.getItem(temp_name).numericState;


if (temp_value < min_temp){ // boiler cold
  procent = 0;
}else{
  if (temp_value > max_temp){ //Max
    procent = 100;
  }else{ //
    procent = (100/(max_temp-min_temp)) * (temp_value-min_temp);
  }
}
if (procent == 0){
  offset1=0;
  offset2=0;
}else{
  if (procent == 100){
    offset1=100;
    offset2=100;
  }else{
    if (procent > 50){ //primary red
      offset1=(procent-50)*2;
      offset2=100;
    }else{
      offset1=0;
      offset2=procent*2;
    }
  }
}
//convert numbers into int
offset1 = Math.round(offset1);
offset2 = Math.round(offset2);
procent = Math.round(procent);
let url = "http://" + ip + ":8080/static/buffer.html?offset1=" + offset1 + "%&offset2=" + offset2 + "%&color1=" + color1 + "&color2=" + color2;
items.getItem(url_name).sendCommand(url);
items.getItem(level_name).sendCommand(procent);

/*
Code end
*/
  },
  tags: ["BoilerRoom"],
  id: "BufferSVG"
});
