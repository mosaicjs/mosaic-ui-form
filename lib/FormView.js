import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';
import PlexusValidate from 'plexus-validate';
import PlexusForm from 'plexus-form';

export default class FormView extends View {
    static get Layout(){ return FormLayout; }
    static get FieldWrapper() { return BootstrapFieldWrapper; }
    static get SectionWrapper() { return BootstrapSectionWrapper; }
    
    renderView(){
        const Layout = this.Layout;
        return (
            <Layout
                key={this.options.key}
                view={this}
                dependencies={this.options.dependencies||[]}/>
        );
    }
    
    get schema(){
        if (!this._schema){
            this._schema = this.options.schema || {};
        }
        return this._schema;
    }
    get values(){
        let object = this.object;
        let result;
        if (object) {
            result = object.data;
        }
        return result || {};
    }
    get buttons(){ return this.options.buttons || []; }
    get validate() { return this.options.validate || PlexusValidate; }
    get Layout(){ return this.constructor.Layout; };
    get FieldWrapper(){ return this.constructor.FieldWrapper; }
    get SectionWrapper(){ return this.constructor.SectionWrapper; }
}

class FormLayout extends DataSetLayout {

    render(){
        const view = this.props.view;
        const schema = view.schema;
        let className = view.className || 'form-horizontal';
        let buttons = view.buttons || [ 'OK' ];
        return (
            <PlexusForm
                key={this.props.key}
                className={className}
                buttons={buttons}
                onSubmit={view.options.onSubmit}
                schema={view.schema}
                validate={view.validate}
                fieldWrapper={view.FieldWrapper}
                sectionWrapper={view.SectionWrapper}
                values={view.values}
              />
        );
    }
}

function renderTooltip(options){
    let title = options.title;
    let style = !!title ? {} : { visibility : 'hidden' };
    return (
        <span className={options.className} title={title} style={style}>
        </span>
    );
}

function replaceClasses(cls){
    const regex = new RegExp('\\s*' + cls + '\\s*', 'gim');
    return function (nodes){
        for (let i=0, len = nodes.length; i < len; i++) {
            let node = nodes[i];
            let str = node.className || '';
            str = str.replace(regex, '') + ' ' + cls;
            node.className = str;
        }
    };
}

class BootstrapFieldWrapper extends React.Component {
    componentDidMount(){
        this._updateClasess();
    }
    componentDidUpdate(){
        this._updateClasess();
    }
    _updateClasess(){
        if (!this._setStyle) {
            this._setStyle = replaceClasses('form-control');
        }
        const setStyle = this._setStyle;
        let node = React.findDOMNode(this);
        setStyle(node.querySelectorAll('input'));
        setStyle(node.querySelectorAll('textarea'));
        setStyle(node.querySelectorAll('select'));
    }
    render(){
        const classes = ['form-group'];
        if (!!this.props.errors) {
            classes.push('has-error');
        }
        let help = renderTooltip({
            title : this.props.description,
            className: "glyphicon glyphicon-question-sign"
        });
        let errors = renderTooltip({
            title : (this.props.errors || []).join('\n'),
            className: "glyphicon glyphicon-warning-sign"
        });
        return (
            <div className={classes.join(' ')} key={this.props.label}>
              <label className="col-sm-2 control-label" htmlFor={this.props.label} >
                {help}
                {errors}
                {' '}
                {this.props.title}
              </label>
              <div className="col-sm-10">
                  {this.props.children}
              </div>
            </div>
        );
    }
}

class BootstrapSectionWrapper extends React.Component {
    render(){
        let title;
        let help = renderTooltip({
            title : this.props.description,
            className: "glyphicon glyphicon-question-sign"
        });
        let errors = renderTooltip({
            title : (this.props.errors || []).join('\n'),
            className: "glyphicon glyphicon-warning-sign"
        });
        if (!!this.props.title || !!help || !!errors) {
            title = (
                <div className="row">
                    <label className="col-sm-2 control-label" htmlFor={this.props.label} >
                      {help}
                      {errors}
                      {' '}
                      { this.props.title }
                    </label>
                </div>
            );
        }
        const classes = [];
        if (!!this.props.errors) {
            classes.push('has-error');
        }
        return (
            <div className={classes.join(' ')} key={this.props.label}>
               {title}
               <div className="row">
                  <div className="col-sm-12">
                      {this.props.children}
                  </div>
               </div>
            </div>
        );
    }    
}