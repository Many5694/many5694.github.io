<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class redquest extends CI_Controller {
	
	function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function quizdisplay()
	{
		$this->load->model('redmodel');
		$this->data['questions'] = $this->redmodel->getQuestions();
		$this->load->view('redplay', $this->data);
	}
	
		public function resultdisplay()
	{
		$this->data['checks'] = array(
		     'ques1' => $this->input->post('Qid1'),
		     'ques2' => $this->input->post('Qid2'),
			 'ques3' => $this->input->post('Qid3'),
			 'ques4' => $this->input->post('Qid4'),
		     'ques5' => $this->input->post('Qid5'),
		);

        $this->load->model('redmodel');
		$this->data['results'] = $this->redmodel->getQuestions();
		$this->load->view('redresult', $this->data);
	}
}