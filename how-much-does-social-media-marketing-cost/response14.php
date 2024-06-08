<?php
// Checks if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LdlJe0pAAAAAFrI7HqCIB-eyV8JhbbI2yjqSn3q',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
        header("Location: https://viralbreath.agency/how-much-does-social-media-marketing-cost/");
    } else {
        // If CAPTCHA is successfully completed...

        // Paste mail function or whatever else you want to happen here!
        header("Location: https://viralbreath.agency/social-media-ad-budget-calculator");
    }
} else { ?>
    
<!-- FORM GOES HERE -->
<form method='post' enctype='multipart/form-data'  id='gform_18'  action='response.php' >
                        <div class='gform_body gform-body'><ul id='gform_fields_18' class='gform_fields top_label form_sublabel_below description_below'><li id="field_18_12" class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_12' >Name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_12' id='input_18_12' type='text' value='' class='large'    placeholder='Name' aria-required="true" aria-invalid="false"   /> </div></li><li id="field_18_2" class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_2' >Company<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_2' id='input_18_2' type='text' value='' class='large'    placeholder='Company' aria-required="true" aria-invalid="false"   /> </div></li><li id="field_18_4" class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_4' >Phone<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_4' id='input_18_4' type='text' value='' class='large'    placeholder='Phone' aria-required="true" aria-invalid="false"   /> </div></li><li id="field_18_11" class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_11' >Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_email'>
                            <input name='input_11' id='input_18_11' type='text' value='' class='large'   placeholder='Email' aria-required="true" aria-invalid="false"  />
                        </div></li><li id="field_18_14" class="gfield gfield--width-full field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_14' >How did you hear about us?</label><div class='ginput_container ginput_container_select'><select name='input_14' id='input_18_14' class='large gfield_select'     aria-invalid="false" ><option value='' selected='selected' class='gf_placeholder'>how did you hear about us?</option><option value='Google search' >Google search</option><option value='Clutch.co' >Clutch.co</option><option value='The manifest' >The manifest</option><option value='UpCity' >UpCity</option><option value='Facebook' >Facebook</option><option value='Twitter' >Twitter</option><option value='Instagram' >Instagram</option><option value='Youtube' >Youtube</option><option value='Tradeshow' >Tradeshow</option><option value='DesignRush' >DesignRush</option><option value='Referral' >Referral</option><option value='Other' >Other</option></select></div></li><li id="field_18_7" class="gfield field_sublabel_below field_description_below hidden_label gfield_visibility_visible" ><label class='gfield_label' for='input_18_7' >Message</label><div class='ginput_container ginput_container_textarea'><textarea name='input_7' id='input_18_7' class='textarea large'    placeholder='MESSAGE'  aria-invalid="false"   rows='10' cols='50'></textarea></div></li><li id="field_18_10" class="gfield field_sublabel_below field_description_below gfield_visibility_visible" ><label class='gfield_label' for='input_18_10' >CAPTCHA</label><div class="g-recaptcha" data-sitekey="6LdKHfgbAAAAAOw33IWTzBWhpp4TG9H6QJboD_dF"></div></li></ul></div>
        <div class='gform_footer top_label'> <input type='submit' id='gform_submit_button_18' class='gform_button button' value='Send Message'  onclick='if(window["gf_submitting_18"]){return false;}  window["gf_submitting_18"]=true;  ' onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_18"]){return false;} window["gf_submitting_18"]=true;  jQuery("#gform_18").trigger("submit",[true]); }' /> 
            <input type='hidden' class='gform_hidden' name='is_submit_18' value='1' />
            <input type='hidden' class='gform_hidden' name='gform_submit' value='18' />
            
            <input type='hidden' class='gform_hidden' name='gform_unique_id' value='' />
            <input type='hidden' class='gform_hidden' name='state_18' value='WyJbXSIsImZiNWI2N2ZkNzc0MGYzNTZjZGEwZTQxOTViN2E2MGVmIl0=' />
            <input type='hidden' class='gform_hidden' name='gform_target_page_number_18' id='gform_target_page_number_18' value='0' />
            <input type='hidden' class='gform_hidden' name='gform_source_page_number_18' id='gform_source_page_number_18' value='1' />
            <input type='hidden' name='gform_field_values' value='' />
            
        </div>
                        </form>

<?php } ?>
