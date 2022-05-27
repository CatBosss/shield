<?php

namespace App\Admin\Controllers;

use Andruby\DeepAdmin\Components\Echarts\PropertyList;
use Andruby\DeepAdmin\Components\widgets\Info;
use Andruby\DeepAdmin\Controllers\ContentController;
use Andruby\DeepAdmin\Models\Content;
use Andruby\DeepAdmin\Models\EntityField;
use App\Admin\Models\AppInfo;
use App\Models\AdminVillage;
use Andruby\DeepAdmin\Components\Form\Input;
use Andruby\DeepAdmin\Components\Form\Select;
use Andruby\DeepAdmin\Components\Form\Upload;
use Andruby\DeepAdmin\Components\Widgets\Dialog;
use Andruby\DeepAdmin\Form;
use Andruby\DeepAdmin\Grid;
use Andruby\DeepAdmin\Layout\Row;

class AppController extends ContentController
{
    protected function create_url()
    {
        return $this->createUrl;
    }

    protected function grid_action(Grid\Actions $actions)
    {
        $actions->setDeleteAction(new Grid\Actions\DeleteDialogAction());

    }

    public function isMsgDialogShow()
    {
        return false;
    }

    protected function grid_list(Grid $grid)
    {
//        $grid->dialogForm($this->form()->isDialog());
        $grid->addDialogForm($this->form()->isDialog());
        $grid->editDialogForm($this->form(true)->isDialog());

        return $grid; // TODO: Change the autogenerated stub
    }

    protected function grid_toolbars(Grid\Toolbars $toolbars)
    {
        $toolbars->addRight(Grid\Tools\ToolButton::make("导入")
            ->icon("el-icon-upload2")
            ->type('success')
            ->requestMethod('get')
            ->isFilterFormData(true)
            ->handler(Grid\Actions\ActionButton::HANDLER_ROUTE)
            ->dialog(function (Dialog $dialog) {
                $dialog->title('行政村导入');
                $dialog->slot(function (\Andruby\DeepAdmin\Layout\Content $content) {
                    $data[] = ['name' => '请上传行政村管理模板格式数据。', 'label' => '说明：'];
                    $content->className('m-10')
                        ->row(function (Row $row) use ($data) {
                            $row->gutter(10);
                            $row->column(24, Info::make()->info_list($data));
                        })
                        ->row(function (Row $row) {
                            $row->gutter(10);
                            $row->column(24, $this->import_form());
                        });
                });
            })
        );
    }

    protected function import_form(): Form
    {
        $form = new Form(new AppInfo());
        $form->style('margin-left:-100px;width:100%;');
//        $form->isDialog();
        $form->action('admin-api/village/import');

        $form->item("files", "导入文件")->component(
            Upload::make()->file()->path('images')->width(130)->uniqueName()->height(130)->drag()
        );

        $form->getActions()->cancelButton()->afterEmit('cancel', null)->afterEmit('cc',['name'=>11]);
        return $form;
    }

    protected function form($isEdit = 0)
    {
        $form = new Form(new Content('app_info'));
        $form->getActions()->buttonCenter();
//        $form->action($form->getAction().'?entity_id=13');
        $form->actionParams(['entity_id' => 50, 'name' => 'zhm']);
        $form->labelWidth('150px');
        $form->labelPosition('right')->statusIcon(true);


        $form->item('name', '名称')
            ->component(Input::make(''))
            ->inputWidth(6)
            ->required(true, 'string');

        $form->item('app_id', '应用名称')
            ->component(Input::make(''))
            ->inputWidth(6)
            ->required(true, 'string');

        $fields = EntityField::query()->find(60);
        if ($isEdit) {
            $form->item('os_type', '应用系统编辑')
                ->component(Select::make()->options($this->_selectOption($fields)))
                ->inputWidth(6);
        } else {
            $form->item('os_type', '应用系统')
                ->component(Select::make()->options($this->_selectOption($fields)))
                ->inputWidth(6);
        }

        $form->item('hidden', '隐藏值')
            ->hideLabel()
            ->component(Input::make()->type('hidden'));

        return $form;
    }
}
