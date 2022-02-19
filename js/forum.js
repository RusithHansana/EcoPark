function dropdiscussions(cat_id){
    if(("#cat_disscussion_1"+cat_id).css("display")=="block"){
        ("#cat_disscussion_1"+cat_id).css("display","none");
    }else{
        (`#cat_disscussion_1${cat_id}`).css("display","block");
    }
}