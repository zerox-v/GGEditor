'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var G6 = _interopDefault(require('@antv/g6'));
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var merge = _interopDefault(require('lodash/merge'));
var isArray = _interopDefault(require('lodash/isArray'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var React = _interopDefault(require('react'));
var pick = _interopDefault(require('lodash/pick'));
var cloneDeep = _interopDefault(require('lodash/cloneDeep'));
var _objectWithoutPropertiesLoose = _interopDefault(require('@babel/runtime/helpers/objectWithoutPropertiesLoose'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var omit = _interopDefault(require('lodash/omit'));
var isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var ReactDOM = _interopDefault(require('react-dom'));
var delay = _interopDefault(require('lodash/delay'));

var FLOW_CONTAINER_ID = 'J_FlowContainer';
var MIND_CONTAINER_ID = 'J_MindContainer';
var LABEL_DEFAULT_TEXT = '新建节点';
var RendererType;

(function(RendererType) {
  RendererType['Canvas'] = 'canvas';
  RendererType['Svg'] = 'svg';
})(RendererType || (RendererType = {}));

var ItemType;

(function(ItemType) {
  ItemType['Node'] = 'node';
  ItemType['Edge'] = 'edge';
})(ItemType || (ItemType = {}));

var ItemState;

(function(ItemState) {
  ItemState['Active'] = 'active';
  ItemState['ActiveAnchorPoints'] = 'activeAnchorPoints';
  ItemState['Selected'] = 'selected';
  ItemState['HighLight'] = 'highLight';
  ItemState['Error'] = 'error';
})(ItemState || (ItemState = {}));

var GraphType;

(function(GraphType) {
  GraphType['Flow'] = 'flow';
  GraphType['Mind'] = 'mind';
})(GraphType || (GraphType = {}));

var GraphMode;

(function(GraphMode) {
  GraphMode['Default'] = 'default';
  GraphMode['AddNode'] = 'addNode';
  GraphMode['Readonly'] = 'readonly';
})(GraphMode || (GraphMode = {}));

var GraphState;

(function(GraphState) {
  GraphState['NodeSelected'] = 'nodeSelected';
  GraphState['EdgeSelected'] = 'edgeSelected';
  GraphState['MultiSelected'] = 'multiSelected';
  GraphState['CanvasSelected'] = 'canvasSelected';
})(GraphState || (GraphState = {}));

var LabelState;

(function(LabelState) {
  LabelState['Hide'] = 'hide';
  LabelState['Show'] = 'show';
})(LabelState || (LabelState = {}));

var AnchorPointState;

(function(AnchorPointState) {
  AnchorPointState['Enabled'] = 'enabled';
  AnchorPointState['Disabled'] = 'disabled';
})(AnchorPointState || (AnchorPointState = {}));

var EditorEvent;

(function(EditorEvent) {
  /** 调用命令之前触发 */
  EditorEvent['onBeforeExecuteCommand'] = 'onBeforeExecuteCommand';
  /** 调用命令之后触发 */

  EditorEvent['onAfterExecuteCommand'] = 'onAfterExecuteCommand';
  /** 改变画面状态触发 */

  EditorEvent['onGraphStateChange'] = 'onGraphStateChange';
  /** 改变标签状态触发 */

  EditorEvent['onLabelStateChange'] = 'onLabelStateChange';
})(EditorEvent || (EditorEvent = {}));

var EditorCommand;

(function(EditorCommand) {
  /** 撤销 */
  EditorCommand['Undo'] = 'undo';
  /** 重做 */

  EditorCommand['Redo'] = 'redo';
  /** 添加 */

  EditorCommand['Add'] = 'add';
  /** 更新 */

  EditorCommand['Update'] = 'update';
  /** 删除 */

  EditorCommand['Remove'] = 'remove';
  /** 复制 */

  EditorCommand['Copy'] = 'copy';
  /** 粘贴 */

  EditorCommand['Paste'] = 'paste';
  /** 粘贴到这里 */

  EditorCommand['PasteHere'] = 'pasteHere';
  /** 放大 */

  EditorCommand['ZoomIn'] = 'zoomIn';
  /** 缩小 */

  EditorCommand['ZoomOut'] = 'zoomOut';
  /** 插入主题 */

  EditorCommand['Topic'] = 'topic';
  /** 插入子主题 */

  EditorCommand['Subtopic'] = 'subtopic';
  /** 收起 */

  EditorCommand['Fold'] = 'fold';
  /** 展开 */

  EditorCommand['Unfold'] = 'unfold';
})(EditorCommand || (EditorCommand = {}));

var GraphCommonEvent;

(function(GraphCommonEvent) {
  /** 单击鼠标左键或者按下回车键时触发 */
  GraphCommonEvent['onClick'] = 'click';
  /** 双击鼠标左键时触发 */

  GraphCommonEvent['onDoubleClick'] = 'dblclick';
  /** 鼠标移入元素范围内触发，该事件不冒泡，即鼠标移到其后代元素上时不会触发 */

  GraphCommonEvent['onMouseEnter'] = 'mouseenter';
  /** 鼠标在元素内部移到时不断触发，不能通过键盘触发 */

  GraphCommonEvent['onMouseMove'] = 'mousemove';
  /** 鼠标移出目标元素后触发 */

  GraphCommonEvent['onMouseOut'] = 'mouseout';
  /** 鼠标移入目标元素上方，鼠标移到其后代元素上时会触发 */

  GraphCommonEvent['onMouseOver'] = 'mouseover';
  /** 鼠标移出元素范围时触发，该事件不冒泡，即鼠标移到其后代元素时不会触发 */

  GraphCommonEvent['onMouseLeave'] = 'mouseleave';
  /** 鼠标按钮被按下（左键或者右键）时触发，不能通过键盘触发 */

  GraphCommonEvent['onMouseDown'] = 'mousedown';
  /** 鼠标按钮被释放弹起时触发，不能通过键盘触发 */

  GraphCommonEvent['onMouseUp'] = 'mouseup';
  /** 用户右击鼠标时触发并打开上下文菜单 */

  GraphCommonEvent['onContextMenu'] = 'contextmenu';
  /** 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上 */

  GraphCommonEvent['onDragStart'] = 'dragstart';
  /** 当拖拽元素在拖动过程中时触发的事件，此事件作用于被拖拽元素上 */

  GraphCommonEvent['onDrag'] = 'drag';
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 */

  GraphCommonEvent['onDragEnd'] = 'dragend';
  /** 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphCommonEvent['onDragEnter'] = 'dragenter';
  /** 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphCommonEvent['onDragLeave'] = 'dragleave';
  /** 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */

  GraphCommonEvent['onDrop'] = 'drop';
  /** 按下键盘键触发该事件 */

  GraphCommonEvent['onKeyDown'] = 'keydown';
  /** 释放键盘键触发该事件 */

  GraphCommonEvent['onKeyUp'] = 'keyup';
  /** 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 */

  GraphCommonEvent['onTouchStart'] = 'touchstart';
  /** 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用 preventDefault() 事件可以阻止滚动。 */

  GraphCommonEvent['onTouchMove'] = 'touchmove';
  /** 当手指从屏幕上离开的时候触发 */

  GraphCommonEvent['onTouchEnd'] = 'touchend';
})(GraphCommonEvent || (GraphCommonEvent = {}));

var GraphNodeEvent;

(function(GraphNodeEvent) {
  /** 鼠标左键单击节点时触发 */
  GraphNodeEvent['onNodeClick'] = 'node:click';
  /** 鼠标双击左键节点时触发 */

  GraphNodeEvent['onNodeDoubleClick'] = 'node:dblclick';
  /** 鼠标移入节点时触发 */

  GraphNodeEvent['onNodeMouseEnter'] = 'node:mouseenter';
  /** 鼠标在节点内部移到时不断触发，不能通过键盘触发 */

  GraphNodeEvent['onNodeMouseMove'] = 'node:mousemove';
  /** 鼠标移出节点后触发 */

  GraphNodeEvent['onNodeMouseOut'] = 'node:mouseout';
  /** 鼠标移入节点上方时触发 */

  GraphNodeEvent['onNodeMouseOver'] = 'node:mouseover';
  /** 鼠标移出节点时触发 */

  GraphNodeEvent['onNodeMouseLeave'] = 'node:mouseleave';
  /** 鼠标按钮在节点上按下（左键或者右键）时触发，不能通过键盘触发 */

  GraphNodeEvent['onNodeMouseDown'] = 'node:mousedown';
  /** 节点上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */

  GraphNodeEvent['onNodeMouseUp'] = 'node:mouseup';
  /** 用户在节点上右击鼠标时触发并打开右键菜单 */

  GraphNodeEvent['onNodeContextMenu'] = 'node:contextmenu';
  /** 当节点开始被拖拽的时候触发的事件，此事件作用在被拖曳节点上 */

  GraphNodeEvent['onNodeDragStart'] = 'node:dragstart';
  /** 当节点在拖动过程中时触发的事件，此事件作用于被拖拽节点上 */

  GraphNodeEvent['onNodeDrag'] = 'node:drag';
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳节点上 */

  GraphNodeEvent['onNodeDragEnd'] = 'node:dragend';
  /** 当拖曳节点进入目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphNodeEvent['onNodeDragEnter'] = 'node:dragenter';
  /** 当拖曳节点离开目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphNodeEvent['onNodeDragLeave'] = 'node:dragleave';
  /** 被拖拽的节点在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */

  GraphNodeEvent['onNodeDrop'] = 'node:drop';
})(GraphNodeEvent || (GraphNodeEvent = {}));

var GraphEdgeEvent;

(function(GraphEdgeEvent) {
  /** 鼠标左键单击边时触发 */
  GraphEdgeEvent['onEdgeClick'] = 'edge:click';
  /** 鼠标双击左键边时触发 */

  GraphEdgeEvent['onEdgeDoubleClick'] = 'edge:dblclick';
  /** 鼠标移入边时触发 */

  GraphEdgeEvent['onEdgeMouseEnter'] = 'edge:mouseenter';
  /** 鼠标在边上移到时不断触发，不能通过键盘触发 */

  GraphEdgeEvent['onEdgeMouseMove'] = 'edge:mousemove';
  /** 鼠标移出边后触发 */

  GraphEdgeEvent['onEdgeMouseOut'] = 'edge:mouseout';
  /** 鼠标移入边上方时触发 */

  GraphEdgeEvent['onEdgeMouseOver'] = 'edge:mouseover';
  /** 鼠标移出边时触发 */

  GraphEdgeEvent['onEdgeMouseLeave'] = 'edge:mouseleave';
  /** 鼠标按钮在边上按下（左键或者右键）时触发，不能通过键盘触发 */

  GraphEdgeEvent['onEdgeMouseDown'] = 'edge:mousedown';
  /** 边上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */

  GraphEdgeEvent['onEdgeMouseUp'] = 'edge:mouseup';
  /** 用户在边上右击鼠标时触发并打开右键菜单 */

  GraphEdgeEvent['onEdgeContextMenu'] = 'edge:contextmenu';
})(GraphEdgeEvent || (GraphEdgeEvent = {}));

var GraphCanvasEvent;

(function(GraphCanvasEvent) {
  /** 鼠标左键单击画布时触发 */
  GraphCanvasEvent['onCanvasClick'] = 'canvas:click';
  /** 鼠标双击左键画布时触发 */

  GraphCanvasEvent['onCanvasDoubleClick'] = 'canvas:dblclick';
  /** 鼠标移入画布时触发 */

  GraphCanvasEvent['onCanvasMouseEnter'] = 'canvas:mouseenter';
  /** 鼠标在画布内部移到时不断触发，不能通过键盘触发 */

  GraphCanvasEvent['onCanvasMouseMove'] = 'canvas:mousemove';
  /** 鼠标移出画布后触发 */

  GraphCanvasEvent['onCanvasMouseOut'] = 'canvas:mouseout';
  /** 鼠标移入画布上方时触发 */

  GraphCanvasEvent['onCanvasMouseOver'] = 'canvas:mouseover';
  /** 鼠标移出画布时触发 */

  GraphCanvasEvent['onCanvasMouseLeave'] = 'canvas:mouseleave';
  /** 鼠标按钮在画布上按下（左键或者右键）时触发，不能通过键盘触发 */

  GraphCanvasEvent['onCanvasMouseDown'] = 'canvas:mousedown';
  /** 画布上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */

  GraphCanvasEvent['onCanvasMouseUp'] = 'canvas:mouseup';
  /** 用户在画布上右击鼠标时触发并打开右键菜单 */

  GraphCanvasEvent['onCanvasContextMenu'] = 'canvas:contextmenu';
  /** 当画布开始被拖拽的时候触发的事件，此事件作用在被拖曳画布上 */

  GraphCanvasEvent['onCanvasDragStart'] = 'canvas:dragstart';
  /** 当画布在拖动过程中时触发的事件，此事件作用于被拖拽画布上 */

  GraphCanvasEvent['onCanvasDrag'] = 'canvas:drag';
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳画布上 */

  GraphCanvasEvent['onCanvasDragEnd'] = 'canvas:dragend';
  /** 当拖曳画布进入目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphCanvasEvent['onCanvasDragEnter'] = 'canvas:dragenter';
  /** 当拖曳画布离开目标元素的时候触发的事件，此事件作用在目标元素上 */

  GraphCanvasEvent['onCanvasDragLeave'] = 'canvas:dragleave';
})(GraphCanvasEvent || (GraphCanvasEvent = {}));

var GraphCustomEvent;

(function(GraphCustomEvent) {
  /** 调用 add / addItem 方法之前触发 */
  GraphCustomEvent['onBeforeAddItem'] = 'beforeadditem';
  /** 调用 add / addItem 方法之后触发 */

  GraphCustomEvent['onAfterAddItem'] = 'afteradditem';
  /** 调用 remove / removeItem 方法之前触发 */

  GraphCustomEvent['onBeforeRemoveItem'] = 'beforeremoveitem';
  /** 调用 remove / removeItem 方法之后触发 */

  GraphCustomEvent['onAfterRemoveItem'] = 'afterremoveitem';
  /** 调用 update / updateItem 方法之前触发 */

  GraphCustomEvent['onBeforeUpdateItem'] = 'beforeupdateitem';
  /** 调用 update / updateItem 方法之后触发 */

  GraphCustomEvent['onAfterUpdateItem'] = 'afterupdateitem';
  /** 调用 showItem / hideItem 方法之前触发 */

  GraphCustomEvent['onBeforeItemVisibilityChange'] = 'beforeitemvisibilitychange';
  /** 调用 showItem / hideItem 方法之后触发 */

  GraphCustomEvent['onAfterItemVisibilityChange'] = 'afteritemvisibilitychange';
  /** 调用 setItemState 方法之前触发 */

  GraphCustomEvent['onBeforeItemStateChange'] = 'beforeitemstatechange';
  /** 调用 setItemState 方法之后触发 */

  GraphCustomEvent['onAfterItemStateChange'] = 'afteritemstatechange';
  /** 调用 refreshItem 方法之前触发 */

  GraphCustomEvent['onBeforeRefreshItem'] = 'beforerefreshitem';
  /** 调用 refreshItem 方法之后触发 */

  GraphCustomEvent['onAfterRefreshItem'] = 'afterrefreshitem';
  /** 调用 clearItemStates 方法之前触发 */

  GraphCustomEvent['onBeforeItemStatesClear'] = 'beforeitemstatesclear';
  /** 调用 clearItemStates 方法之后触发 */

  GraphCustomEvent['onAfterItemStatesClear'] = 'afteritemstatesclear';
  /** 布局前触发。调用 render 时会进行布局，因此 render 时会触发。或用户主动调用图的 layout 时触发 */

  GraphCustomEvent['onBeforeLayout'] = 'beforelayout';
  /** 布局完成后触发。调用 render 时会进行布局，因此 render 时布局完成后会触发。或用户主动调用图的 layout 时布局完成后触发 */

  GraphCustomEvent['onAfterLayout'] = 'afterlayout';
  /** 连线完成之后触发 */

  GraphCustomEvent['onAfterConnect'] = 'afterconnect';
})(GraphCustomEvent || (GraphCustomEvent = {}));

var index = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  FLOW_CONTAINER_ID: FLOW_CONTAINER_ID,
  MIND_CONTAINER_ID: MIND_CONTAINER_ID,
  LABEL_DEFAULT_TEXT: LABEL_DEFAULT_TEXT,
  get RendererType() {
    return RendererType;
  },
  get ItemType() {
    return ItemType;
  },
  get ItemState() {
    return ItemState;
  },
  get GraphType() {
    return GraphType;
  },
  get GraphMode() {
    return GraphMode;
  },
  get GraphState() {
    return GraphState;
  },
  get LabelState() {
    return LabelState;
  },
  get AnchorPointState() {
    return AnchorPointState;
  },
  get EditorEvent() {
    return EditorEvent;
  },
  get EditorCommand() {
    return EditorCommand;
  },
  get GraphCommonEvent() {
    return GraphCommonEvent;
  },
  get GraphNodeEvent() {
    return GraphNodeEvent;
  },
  get GraphEdgeEvent() {
    return GraphEdgeEvent;
  },
  get GraphCanvasEvent() {
    return GraphCanvasEvent;
  },
  get GraphCustomEvent() {
    return GraphCustomEvent;
  },
});

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var canvas = document.createElement('canvas');
var canvasContext = canvas.getContext('2d');
function getNodeSide(item) {
  var model = item.getModel();

  if (model.side) {
    return model.side;
  }

  var parent = item.get('parent');

  if (parent) {
    return getNodeSide(parent);
  }

  return 'right';
}
function getRectPath(x, y, w, h, r) {
  if (r) {
    return [
      ['M', +x + +r, y],
      ['l', w - r * 2, 0],
      ['a', r, r, 0, 0, 1, r, r],
      ['l', 0, h - r * 2],
      ['a', r, r, 0, 0, 1, -r, r],
      ['l', r * 2 - w, 0],
      ['a', r, r, 0, 0, 1, -r, -r],
      ['l', 0, r * 2 - h],
      ['a', r, r, 0, 0, 1, r, -r],
      ['z'],
    ];
  }

  var res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
  res.toString = toString;
  return res;
}
function getFoldButtonPath() {
  var w = 14;
  var h = 14;
  var rect = getRectPath(0, 0, w, h, 2);
  var hp = 'M' + (w * 3) / 14 + ',' + h / 2 + 'L' + (w * 11) / 14 + ',' + h / 2;
  var vp = '';
  return rect + hp + vp;
}
function getUnfoldButtonPath() {
  var w = 14;
  var h = 14;
  var rect = getRectPath(0, 0, w, h, 2);
  var hp = 'M' + (w * 3) / 14 + ',' + h / 2 + 'L' + (w * 11) / 14 + ',' + h / 2;
  var vp = 'M' + w / 2 + ',' + (h * 3) / 14 + 'L' + w / 2 + ',' + (h * 11) / 14;
  return rect + hp + vp;
}
function optimizeMultilineText(text, font, maxRows, maxWidth) {
  canvasContext.font = font;

  if (canvasContext.measureText(text).width <= maxWidth) {
    return text;
  }

  var multilineText = [];
  var tempText = '';
  var tempTextWidth = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(text), _step; !(_step = _iterator()).done; ) {
    var _char2 = _step.value;

    var _canvasContext$measur2 = canvasContext.measureText(_char2),
      _width = _canvasContext$measur2.width;

    if (tempTextWidth + _width >= maxWidth) {
      multilineText.push(tempText);
      tempText = '';
      tempTextWidth = 0;
    }

    tempText += _char2;
    tempTextWidth += _width;
  }

  if (tempText) {
    multilineText.push(tempText);
  }

  if (multilineText.length > maxRows) {
    var ellipsis = '...';
    var ellipsisWidth = canvasContext.measureText(ellipsis).width;
    var _tempText = '';
    var _tempTextWidth = 0;

    for (
      var _iterator2 = _createForOfIteratorHelperLoose(multilineText[maxRows - 1]), _step2;
      !(_step2 = _iterator2()).done;

    ) {
      var _char = _step2.value;

      var _canvasContext$measur = canvasContext.measureText(_char),
        width = _canvasContext$measur.width;

      if (_tempTextWidth + width > maxWidth - ellipsisWidth) {
        break;
      }

      _tempText += _char;
      _tempTextWidth += width;
    }

    multilineText = multilineText.slice(0, maxRows - 1).concat('' + _tempText + ellipsis);
  }

  return multilineText.join('\n');
}

var _stateStyles;
var WRAPPER_BORDER_WIDTH = 2;
var WRAPPER_HORIZONTAL_PADDING = 10;
var WRAPPER_CLASS_NAME = 'node-wrapper';
var CONTENT_CLASS_NAME = 'node-content';
var LABEL_CLASS_NAME = 'node-label';
var bizNode = {
  options: {
    size: [120, 60],
    wrapperStyle: {
      fill: '#40a9ff',
      radius: 8,
    },
    contentStyle: {
      fill: '#ffffff',
      radius: 6,
    },
    labelStyle: {
      fill: '#000000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
    stateStyles:
      ((_stateStyles = {}),
      (_stateStyles[ItemState.Active] = {
        wrapperStyle: {},
        contentStyle: {},
        labelStyle: {},
      }),
      (_stateStyles[ItemState.Selected] = {
        wrapperStyle: {},
        contentStyle: {},
        labelStyle: {},
      }),
      _stateStyles),
  },
  getOptions: function getOptions(model) {
    return merge({}, this.options, this.getCustomConfig(model) || {}, model);
  },
  draw: function draw(model, group) {
    var keyShape = this.drawWrapper(model, group);
    this.drawContent(model, group);
    this.drawLabel(model, group);
    return keyShape;
  },
  drawWrapper: function drawWrapper(model, group) {
    var _this$getSize = this.getSize(model),
      width = _this$getSize[0],
      height = _this$getSize[1];

    var _this$getOptions = this.getOptions(model),
      wrapperStyle = _this$getOptions.wrapperStyle;

    var shape = group.addShape('rect', {
      className: WRAPPER_CLASS_NAME,
      draggable: true,
      attrs: _extends(
        {
          x: -WRAPPER_BORDER_WIDTH,
          y: -WRAPPER_BORDER_WIDTH,
          width: width + WRAPPER_BORDER_WIDTH * 2,
          height: height + WRAPPER_BORDER_WIDTH * 2,
        },
        wrapperStyle,
      ),
    });
    return shape;
  },
  drawContent: function drawContent(model, group) {
    var _this$getSize2 = this.getSize(model),
      width = _this$getSize2[0],
      height = _this$getSize2[1];

    var _this$getOptions2 = this.getOptions(model),
      contentStyle = _this$getOptions2.contentStyle;

    var shape = group.addShape('rect', {
      className: CONTENT_CLASS_NAME,
      draggable: true,
      attrs: _extends(
        {
          x: 0,
          y: 0,
          width: width,
          height: height,
        },
        contentStyle,
      ),
    });
    return shape;
  },
  drawLabel: function drawLabel(model, group) {
    var _this$getSize3 = this.getSize(model),
      width = _this$getSize3[0],
      height = _this$getSize3[1];

    var _this$getOptions3 = this.getOptions(model),
      labelStyle = _this$getOptions3.labelStyle;

    var shape = group.addShape('text', {
      className: LABEL_CLASS_NAME,
      draggable: true,
      attrs: _extends(
        {
          x: width / 2,
          y: height / 2,
          text: model.label,
        },
        labelStyle,
      ),
    });
    return shape;
  },
  setLabelText: function setLabelText(model, group) {
    var shape = group.findByClassName(LABEL_CLASS_NAME);

    if (!shape) {
      return;
    }

    var _this$getSize4 = this.getSize(model),
      width = _this$getSize4[0];

    var _shape$attr = shape.attr(),
      fontStyle = _shape$attr.fontStyle,
      fontWeight = _shape$attr.fontWeight,
      fontSize = _shape$attr.fontSize,
      fontFamily = _shape$attr.fontFamily;

    var text = model.label;
    var font = fontStyle + ' ' + fontWeight + ' ' + fontSize + 'px ' + fontFamily;
    shape.attr('text', optimizeMultilineText(text, font, 2, width - WRAPPER_HORIZONTAL_PADDING * 2));
  },
  update: function update(model, item) {
    var group = item.getContainer();
    this.setLabelText(model, group);
  },
  setState: function setState(name, value, item) {
    var _this = this;

    var group = item.getContainer();
    var model = item.getModel();
    var states = item.getStates();
    [WRAPPER_CLASS_NAME, CONTENT_CLASS_NAME, LABEL_CLASS_NAME].forEach(function(className) {
      var shape = group.findByClassName(className);

      var options = _this.getOptions(model);

      var shapeName = className.split('-')[1];
      shape.attr(_extends({}, options[shapeName + 'Style']));
      states.forEach(function(state) {
        if (options.stateStyles[state] && options.stateStyles[state][shapeName + 'Style']) {
          shape.attr(_extends({}, options.stateStyles[state][shapeName + 'Style']));
        }
      });
    });

    if (name === ItemState.Selected) {
      var wrapperShape = group.findByClassName(WRAPPER_CLASS_NAME);

      var _this$getSize5 = this.getSize(model),
        width = _this$getSize5[0],
        height = _this$getSize5[1];

      if (value) {
        wrapperShape.attr({
          x: -WRAPPER_BORDER_WIDTH,
          y: -WRAPPER_BORDER_WIDTH * 2,
          width: width + WRAPPER_BORDER_WIDTH * 2,
          height: height + WRAPPER_BORDER_WIDTH * 3,
        });
      } else {
        wrapperShape.attr({
          x: -WRAPPER_BORDER_WIDTH,
          y: -WRAPPER_BORDER_WIDTH,
          width: width + WRAPPER_BORDER_WIDTH * 2,
          height: height + WRAPPER_BORDER_WIDTH * 2,
        });
      }
    }

    if (this.afterSetState) {
      this.afterSetState(name, value, item);
    }
  },
  getSize: function getSize(model) {
    var _this$getOptions4 = this.getOptions(model),
      size = _this$getOptions4.size;

    if (!isArray(size)) {
      return [size, size];
    }

    return size;
  },
  getCustomConfig: function getCustomConfig() {
    return {};
  },
  getAnchorPoints: function getAnchorPoints() {
    return [];
  },
};
G6.registerNode('bizNode', bizNode);

var ANCHOR_POINT_NAME = 'anchorPoint';

var getAnchorPointDefaultStyle = function getAnchorPointDefaultStyle(item, anchorPoint) {
  var _item$getKeyShape$get = item.getKeyShape().getBBox(),
    width = _item$getKeyShape$get.width,
    height = _item$getKeyShape$get.height;

  var x = anchorPoint[0],
    y = anchorPoint[1];
  return {
    x: width * x,
    y: height * y - 3,
    r: 3,
    lineWidth: 2,
    fill: '#FFFFFF',
    stroke: '#5AAAFF',
  };
};

var getAnchorPointDefaultDisabledStyle = function getAnchorPointDefaultDisabledStyle(item, anchorPoint) {
  var _item$getKeyShape$get2 = item.getKeyShape().getBBox(),
    width = _item$getKeyShape$get2.width,
    height = _item$getKeyShape$get2.height;

  var x = anchorPoint[0],
    y = anchorPoint[1];
  return {
    img:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xLjUxNSAxLjE3Mmw1LjY1NyA1LjY1Nm0wLTUuNjU2TDEuNTE1IDYuODI4IiBzdHJva2U9IiNGRjYwNjAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+',
    x: width * x - 4,
    y: height * y - 8,
    width: 8,
    height: 8,
  };
};

function drawAnchorPoints(item, getAnchorPointStyle, getAnchorPointDisabledStyle) {
  var group = item.getContainer();
  var model = item.getModel();
  var anchorPoints = this.getAnchorPoints ? this.getAnchorPoints(model) : [];
  var anchorPointsState = item.get('anchorPointsState') || [];
  anchorPoints.forEach(function(anchorPoint, index) {
    if (anchorPointsState[index] === AnchorPointState.Enabled) {
      group.addShape('circle', {
        name: ANCHOR_POINT_NAME,
        attrs: _extends({}, getAnchorPointDefaultStyle(item, anchorPoint), getAnchorPointStyle(item, anchorPoint)),
        isAnchorPoint: true,
        anchorPointIndex: index,
        anchorPointState: AnchorPointState.Enabled,
      });
    } else {
      group.addShape('image', {
        name: ANCHOR_POINT_NAME,
        attrs: _extends(
          {},
          getAnchorPointDefaultDisabledStyle(item, anchorPoint),
          getAnchorPointDisabledStyle(item, anchorPoint),
        ),
        isAnchorPoint: true,
        anchorPointIndex: index,
        anchorPointState: AnchorPointState.Disabled,
      });
    }
  });
}

function removeAnchorPoints(item) {
  var group = item.getContainer();
  var anchorPoints = group.findAllByName(ANCHOR_POINT_NAME);
  anchorPoints.forEach(function(anchorPoint) {
    group.removeChild(anchorPoint);
  });
}

function setAnchorPointsState(name, value, item, getAnchorPointStyle, getAnchorPointDisabledStyle) {
  if (getAnchorPointStyle === void 0) {
    getAnchorPointStyle = function getAnchorPointStyle() {
      return {};
    };
  }

  if (getAnchorPointDisabledStyle === void 0) {
    getAnchorPointDisabledStyle = function getAnchorPointDisabledStyle() {
      return {};
    };
  }

  if (name !== ItemState.ActiveAnchorPoints) {
    return;
  }

  if (value) {
    drawAnchorPoints.call(this, item, getAnchorPointStyle, getAnchorPointDisabledStyle);
  } else {
    removeAnchorPoints.call(this, item);
  }
}

var bizFlowNode = {
  afterSetState: function afterSetState(name, value, item) {
    setAnchorPointsState.call(this, name, value, item);
  },
  getAnchorPoints: function getAnchorPoints() {
    return [
      [0.5, 0],
      [0.5, 1],
      [0, 0.5],
      [1, 0.5],
    ];
  },
};
G6.registerNode('bizFlowNode', bizFlowNode, 'bizNode');

var FOLD_BUTTON_CLASS_NAME = 'node-fold-button';
var UNFOLD_BUTTON_CLASS_NAME = 'node-unfold-button';
var bizMindNode = {
  afterDraw: function afterDraw(model, group) {
    this.drawButton(model, group);
  },
  afterUpdate: function afterUpdate(model, item) {
    var group = item.getContainer();
    this.drawButton(model, group);
    this.adjustButton(model, item);
  },
  drawButton: function drawButton(model, group) {
    var children = model.children,
      collapsed = model.collapsed;
    [FOLD_BUTTON_CLASS_NAME, UNFOLD_BUTTON_CLASS_NAME].forEach(function(className) {
      var shape = group.findByClassName(className);

      if (shape) {
        shape.destroy();
      }
    });

    if (!children || !children.length) {
      return;
    }

    if (!collapsed) {
      group.addShape('path', {
        className: FOLD_BUTTON_CLASS_NAME,
        attrs: {
          path: getFoldButtonPath(),
          fill: '#ffffff',
          stroke: '#ccc1d8',
        },
      });
    } else {
      group.addShape('path', {
        className: UNFOLD_BUTTON_CLASS_NAME,
        attrs: {
          path: getUnfoldButtonPath(),
          fill: '#ffffff',
          stroke: '#ccc1d8',
        },
      });
    }
  },
  adjustButton: function adjustButton(model, item) {
    var children = model.children,
      collapsed = model.collapsed;

    if (!children || !children.length) {
      return;
    }

    var group = item.getContainer();
    var shape = group.findByClassName(!collapsed ? FOLD_BUTTON_CLASS_NAME : UNFOLD_BUTTON_CLASS_NAME);

    var _this$getSize = this.getSize(model),
      width = _this$getSize[0],
      height = _this$getSize[1];

    var x = getNodeSide(item) === 'left' ? -24 : width + 10;
    var y = height / 2 - 9;
    shape.translate(x, y);
  },
  getAnchorPoints: function getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
};
G6.registerNode('bizMindNode', bizMindNode, 'bizNode');

var _stateStyles$1;
var EDGE_LABEL_CLASS_NAME = 'edge-label';
var EDGE_LABEL_WRAPPER_CLASS_NAME = 'edge-label-wrapper-label';
var bizFlowEdge = {
  options: {
    style: {
      stroke: '#ccc1d8',
      lineWidth: 2,
      shadowColor: null,
      shadowBlur: 0,
      radius: 8,
      offset: 24,
      // startArrow: {
      //   path: 'M 3,0 A 3,3,0,1,1,-3,0 A 3,3,0,1,1,3,0 Z',
      //   d: 7,
      // },
      // endArrow: {
      //   path: 'M 3,0 L -3,-3 L -3,3 Z',
      //   d: 5,
      // },
      endArrow: {
        path: 'M 0,0 L 4,3 L 4,-3 Z',
      },
    },
    labelCfg: {
      style: {
        fill: '#000000',
        fontSize: 10,
      },
    },
    stateStyles:
      ((_stateStyles$1 = {}),
      (_stateStyles$1[ItemState.Selected] = {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      }),
      (_stateStyles$1[ItemState.HighLight] = {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      }),
      _stateStyles$1),
  },
  createLabelWrapper: function createLabelWrapper(group) {
    var label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    var labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      return;
    }

    if (labelWrapper) {
      return;
    }

    group.addShape('rect', {
      className: EDGE_LABEL_WRAPPER_CLASS_NAME,
      attrs: {
        fill: '#e1e5e8',
        radius: 2,
      },
    });
    label.set('zIndex', 1);
    group.sort();
  },
  updateLabelWrapper: function updateLabelWrapper(group) {
    var label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    var labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      labelWrapper && labelWrapper.hide();
      return;
    } else {
      labelWrapper && labelWrapper.show();
    }

    if (!labelWrapper) {
      return;
    }

    var _label$getBBox = label.getBBox(),
      minX = _label$getBBox.minX,
      minY = _label$getBBox.minY,
      width = _label$getBBox.width,
      height = _label$getBBox.height;

    labelWrapper.attr({
      x: minX - 5,
      y: minY - 3,
      width: width + 10,
      height: height + 6,
    });
  },
  afterDraw: function afterDraw(model, group) {
    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
  },
  afterUpdate: function afterUpdate(model, item) {
    var group = item.getContainer();
    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
  },
  setState: function setState(name, value, item) {
    var shape = item.get('keyShape');

    if (!shape) {
      return;
    }

    var _this$options = this.options,
      style = _this$options.style,
      stateStyles = _this$options.stateStyles;
    var stateStyle = stateStyles[name];

    if (!stateStyle) {
      return;
    }

    if (value) {
      shape.attr(_extends({}, style, stateStyle));
    } else {
      shape.attr(style);
    }
  },
};
G6.registerEdge('bizFlowEdge', bizFlowEdge, 'polyline');

var _stateStyles$2;
var bizMindEdge = {
  options: {
    style: {
      stroke: '#ccc1d8',
      lineWidth: 2,
      shadowColor: null,
      shadowBlur: 0,
    },
    stateStyles:
      ((_stateStyles$2 = {}),
      (_stateStyles$2[ItemState.Selected] = {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      }),
      (_stateStyles$2[ItemState.HighLight] = {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      }),
      _stateStyles$2),
  },
  setState: function setState(name, value, item) {
    var shape = item.get('keyShape');

    if (!shape) {
      return;
    }

    var _this$options = this.options,
      style = _this$options.style,
      stateStyles = _this$options.stateStyles;
    var stateStyle = stateStyles[name];

    if (!stateStyle) {
      return;
    }

    if (value) {
      shape.attr(_extends({}, style, stateStyle));
    } else {
      shape.attr(style);
    }
  },
};
G6.registerEdge('bizMindEdge', bizMindEdge, 'cubic-horizontal');

/** 生成唯一标识 */

function guid() {
  var s = [];
  var hexDigits = '0123456789abcdef';

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }

  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  var uuid = s.join('');
  return uuid;
}
/** 拼接查询字符 */

var toQueryString = function toQueryString(obj) {
  return Object.keys(obj)
    .map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    })
    .join('&');
};
/** 执行批量处理 */

function executeBatch(graph, execute) {
  var autoPaint = graph.get('autoPaint');
  graph.setAutoPaint(false);
  execute();
  graph.paint();
  graph.setAutoPaint(autoPaint);
}
/** 执行递归遍历 */

function recursiveTraversal(root, callback) {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(function(item) {
    return recursiveTraversal(item, callback);
  });
}
/** 判断是否流程图 */

function isFlow(graph) {
  return graph.constructor === G6.Graph;
}
/** 判断是否脑图 */

function isMind(graph) {
  return graph.constructor === G6.TreeGraph;
}
/** 判断是否节点 */

function isNode(item) {
  return item.getType() === ItemType.Node;
}
/** 判断是否边线 */

function isEdge(item) {
  return item.getType() === ItemType.Edge;
}
/** 获取选中节点 */

function getSelectedNodes(graph) {
  return graph.findAllByState(ItemType.Node, ItemState.Selected);
}
/** 获取选中边线 */

function getSelectedEdges(graph) {
  return graph.findAllByState(ItemType.Edge, ItemState.Selected);
}
/** 获取高亮边线 */

function getHighlightEdges(graph) {
  return graph.findAllByState(ItemType.Edge, ItemState.HighLight);
}
/** 获取图表状态 */

function getGraphState(graph) {
  var graphState = GraphState.MultiSelected;
  var selectedNodes = getSelectedNodes(graph);
  var selectedEdges = getSelectedEdges(graph);

  if (selectedNodes.length === 1 && !selectedEdges.length) {
    graphState = GraphState.NodeSelected;
  }

  if (selectedEdges.length === 1 && !selectedNodes.length) {
    graphState = GraphState.EdgeSelected;
  }

  if (!selectedNodes.length && !selectedEdges.length) {
    graphState = GraphState.CanvasSelected;
  }

  return graphState;
}
/** 设置选中元素 */

function setSelectedItems(graph, items) {
  executeBatch(graph, function() {
    var selectedNodes = getSelectedNodes(graph);
    var selectedEdges = getSelectedEdges(graph);
    [].concat(selectedNodes, selectedEdges).forEach(function(node) {
      graph.setItemState(node, ItemState.Selected, false);
    });
    items.forEach(function(item) {
      graph.setItemState(item, ItemState.Selected, true);
    });
  });
  graph.emit(EditorEvent.onGraphStateChange, {
    graphState: getGraphState(graph),
  });
}
/** 清除选中状态 */

function clearSelectedState(graph, shouldUpdate) {
  if (shouldUpdate === void 0) {
    shouldUpdate = function shouldUpdate() {
      return true;
    };
  }

  var selectedNodes = getSelectedNodes(graph);
  var selectedEdges = getSelectedEdges(graph);
  executeBatch(graph, function() {
    [].concat(selectedNodes, selectedEdges).forEach(function(item) {
      if (shouldUpdate(item)) {
        graph.setItemState(item, ItemState.Selected, false);
      }
    });
  });
}
/** 获取回溯路径 - Flow */

function getFlowRecallEdges(graph, node, targetIds, edges) {
  if (targetIds === void 0) {
    targetIds = [];
  }

  if (edges === void 0) {
    edges = [];
  }

  var inEdges = node.getInEdges();

  if (!inEdges.length) {
    return [];
  }

  inEdges.map(function(edge) {
    var sourceId = edge.getModel().source;
    var sourceNode = graph.findById(sourceId);
    edges.push(edge);
    var targetId = node.get('id');
    targetIds.push(targetId);

    if (!targetIds.includes(sourceId)) {
      getFlowRecallEdges(graph, sourceNode, targetIds, edges);
    }
  });
  return edges;
}
/** 获取回溯路径 - Mind */

function getMindRecallEdges(graph, node, edges) {
  if (edges === void 0) {
    edges = [];
  }

  var parentNode = node.get('parent');

  if (!parentNode) {
    return edges;
  }

  node.getEdges().forEach(function(edge) {
    var source = edge.getModel().source;

    if (source.get('id') === parentNode.get('id')) {
      edges.push(edge);
    }
  });
  return getMindRecallEdges(graph, parentNode, edges);
}

var index$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  guid: guid,
  toQueryString: toQueryString,
  executeBatch: executeBatch,
  recursiveTraversal: recursiveTraversal,
  isFlow: isFlow,
  isMind: isMind,
  isNode: isNode,
  isEdge: isEdge,
  getSelectedNodes: getSelectedNodes,
  getSelectedEdges: getSelectedEdges,
  getHighlightEdges: getHighlightEdges,
  getGraphState: getGraphState,
  setSelectedItems: setSelectedItems,
  clearSelectedState: clearSelectedState,
  getFlowRecallEdges: getFlowRecallEdges,
  getMindRecallEdges: getMindRecallEdges,
});

var Global = function Global() {
  /** 当前版本 */
  this.version = '3.1.5';
  /** 埋点开关 */

  this.trackable = true;
  /** 剪贴板 */

  this.clipboard = {
    point: {
      x: 0,
      y: 0,
    },
    models: [],
  };
  /** 组件数据 */

  this.component = {
    itemPanel: {
      model: null,
      delegateShapeClassName: 'delegateShape_' + guid(),
    },
  };
  /** 插件数据 */

  this.plugin = {
    itemPopover: {
      state: 'hide',
    },
    contextMenu: {
      state: 'hide',
    },
    editableLabel: {
      state: 'hide',
    },
  };
};

var global = new Global();

var CommandManager = /*#__PURE__*/ (function() {
  function CommandManager() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }
  /** 注册命令 */

  var _proto = CommandManager.prototype;

  _proto.register = function register(name, command) {
    this.command[name] = _extends({}, command, {
      name: name,
    });
  };
  /** 执行命令 */

  _proto.execute = function execute(graph, name, params) {
    var Command = this.command[name];

    if (!Command) {
      return;
    }

    var command = Object.create(Command);
    command.params = cloneDeep(Command.params);

    if (params) {
      command.params = _extends({}, command.params, params);
    }

    if (!command.canExecute(graph)) {
      return;
    }

    if (!command.shouldExecute(graph)) {
      return;
    }

    command.init(graph);
    graph.emit(EditorEvent.onBeforeExecuteCommand, {
      name: command.name,
      params: command.params,
    });
    command.execute(graph);
    graph.emit(EditorEvent.onAfterExecuteCommand, {
      name: command.name,
      params: command.params,
    });

    if (command.canUndo(graph)) {
      var commandQueue = this.commandQueue,
        commandIndex = this.commandIndex;
      commandQueue.splice(commandIndex, commandQueue.length - commandIndex, command);
      this.commandIndex += 1;
    }

    graph.emit(EditorEvent.onGraphStateChange, {
      graphState: getGraphState(graph),
    });
  };
  /** 判断是否可以执行 */

  _proto.canExecute = function canExecute(graph, name) {
    return this.command[name].canExecute(graph);
  };
  /** 注入是否应该执行 */

  _proto.injectShouldExecute = function injectShouldExecute(name, shouldExecute) {
    this.command[name].shouldExecute = shouldExecute;
  };

  return CommandManager;
})();

function withContext(Context, shouldRender) {
  if (shouldRender === void 0) {
    shouldRender = function shouldRender() {
      return true;
    };
  }

  return function(WrappedComponent) {
    var InjectContext = function InjectContext(props) {
      var forwardRef = props.forwardRef,
        rest = _objectWithoutPropertiesLoose(props, ['forwardRef']);

      var refProp = {};

      if (WrappedComponent.prototype.isReactComponent) {
        refProp = {
          ref: forwardRef,
        };
      } else {
        refProp = {
          forwardRef: forwardRef,
        };
      }

      return /*#__PURE__*/ React.createElement(Context.Consumer, null, function(context) {
        return shouldRender(context)
          ? /*#__PURE__*/ React.createElement(WrappedComponent, Object.assign({}, refProp, rest, context))
          : null;
      });
    };

    return /*#__PURE__*/ React.forwardRef(function(props, ref) {
      return /*#__PURE__*/ React.createElement(
        InjectContext,
        Object.assign(
          {
            forwardRef: ref,
          },
          props,
        ),
      );
    });
  };
}

var EditorContext = /*#__PURE__*/ React.createContext({});
var EditorPrivateContext = /*#__PURE__*/ React.createContext({});
var withEditorContext = withContext(EditorContext, function(context) {
  return !!context.graph;
});
var withEditorPrivateContext = withContext(EditorPrivateContext);

var _Editor$defaultProps;

var Editor = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Editor, _React$Component);

  function Editor(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.lastMousedownTarget = null;

    _this.setGraph = function(graph) {
      _this.setState({
        graph: graph,
      });

      _this.bindEvent(graph);

      _this.bindShortcut(graph);
    };

    _this.executeCommand = function(name, params) {
      var _this$state = _this.state,
        graph = _this$state.graph,
        commandManager = _this$state.commandManager;

      if (graph) {
        commandManager.execute(graph, name, params);
      }
    };

    _this.state = {
      graph: null,
      setGraph: _this.setGraph,
      executeCommand: _this.executeCommand,
      commandManager: new CommandManager(),
    };
    _this.lastMousedownTarget = null;
    return _this;
  }

  Editor.setTrackable = function setTrackable(trackable) {
    global.trackable = trackable;
  };

  var _proto = Editor.prototype;

  _proto.shouldTriggerShortcut = function shouldTriggerShortcut(graph, target) {
    var renderer = graph.get('renderer');
    var canvasElement = graph.get('canvas').get('el');

    if (!target) {
      return false;
    }

    if (target === canvasElement) {
      return true;
    }

    if (renderer === RendererType.Svg) {
      if (target.nodeName === 'svg') {
        return true;
      }

      var parentNode = target.parentNode;

      while (parentNode && parentNode.nodeName !== 'BODY') {
        if (parentNode.nodeName === 'svg') {
          return true;
        } else {
          parentNode = parentNode.parentNode;
        }
      }

      return false;
    }
  };

  _proto.bindEvent = function bindEvent(graph) {
    var props = this.props;
    graph.on(EditorEvent.onBeforeExecuteCommand, props[EditorEvent.onBeforeExecuteCommand]);
    graph.on(EditorEvent.onAfterExecuteCommand, props[EditorEvent.onAfterExecuteCommand]);
  };

  _proto.bindShortcut = function bindShortcut(graph) {
    var _this2 = this;

    var commandManager = this.state.commandManager;
    window.addEventListener(GraphCommonEvent.onMouseDown, function(e) {
      _this2.lastMousedownTarget = e.target;
    });
    graph.on(GraphCommonEvent.onKeyDown, function(e) {
      if (!_this2.shouldTriggerShortcut(graph, _this2.lastMousedownTarget)) {
        return;
      }

      Object.values(commandManager.command).some(function(command) {
        var name = command.name,
          shortcuts = command.shortcuts;
        var flag = shortcuts.some(function(shortcut) {
          var key = e.key;

          if (!isArray(shortcut)) {
            return shortcut === key;
          }

          return shortcut.every(function(item, index) {
            if (index === shortcut.length - 1) {
              return item === key;
            }

            return e[item];
          });
        });

        if (flag) {
          if (commandManager.canExecute(graph, name)) {
            // Prevent default
            e.preventDefault(); // Execute command

            _this2.executeCommand(name);

            return true;
          }
        }

        return false;
      });
    });
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state2 = this.state,
      graph = _this$state2.graph,
      setGraph = _this$state2.setGraph,
      executeCommand = _this$state2.executeCommand,
      commandManager = _this$state2.commandManager;
    return /*#__PURE__*/ React.createElement(
      EditorContext.Provider,
      {
        value: {
          graph: graph,
          executeCommand: executeCommand,
          commandManager: commandManager,
        },
      },
      /*#__PURE__*/ React.createElement(
        EditorPrivateContext.Provider,
        {
          value: {
            setGraph: setGraph,
            commandManager: commandManager,
          },
        },
        /*#__PURE__*/ React.createElement('div', Object.assign({}, pick(this.props, ['className', 'style'])), children),
      ),
    );
  };

  return Editor;
})(React.Component);

Editor.defaultProps =
  ((_Editor$defaultProps = {}),
  (_Editor$defaultProps[EditorEvent.onBeforeExecuteCommand] = function() {}),
  (_Editor$defaultProps[EditorEvent.onAfterExecuteCommand] = function() {}),
  _Editor$defaultProps);

var BehaviorManager = /*#__PURE__*/ (function() {
  function BehaviorManager() {
    this.behaviors = {};
  }

  var _proto = BehaviorManager.prototype;

  _proto.getRegisteredBehaviors = function getRegisteredBehaviors(type) {
    var _this = this;

    var registeredBehaviors = {};
    Object.keys(this.behaviors).forEach(function(name) {
      var behavior = _this.behaviors[name];
      var graphType = behavior.graphType;

      if (graphType && graphType !== type) {
        return;
      }

      var _behavior$graphMode = behavior.graphMode,
        graphMode = _behavior$graphMode === void 0 ? 'default' : _behavior$graphMode;

      if (!registeredBehaviors[graphMode]) {
        registeredBehaviors[graphMode] = {};
      }

      registeredBehaviors[graphMode][name] = name;
    });
    return registeredBehaviors;
  };

  _proto.wrapEventHandler = function wrapEventHandler(type, behavior) {
    var events = behavior.getEvents();
    Object.keys(events).forEach(function(event) {
      var handlerName = events[event];
      var handler = behavior[handlerName];

      behavior[handlerName] = function() {
        var graph = this.graph;

        if ((type === GraphType.Flow && isMind(graph) === false) || (type === GraphType.Mind && isMind(graph))) {
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          handler.apply(this, params);
        }
      };
    });
    return behavior;
  };

  _proto.register = function register(name, behavior) {
    var graphType = behavior.graphType;
    this.behaviors[name] = behavior;

    switch (graphType) {
      case GraphType.Flow:
        G6.registerBehavior(name, this.wrapEventHandler(GraphType.Flow, behavior));
        break;

      case GraphType.Mind:
        G6.registerBehavior(name, this.wrapEventHandler(GraphType.Mind, behavior));
        break;

      default:
        G6.registerBehavior(name, behavior);
        break;
    }
  };

  return BehaviorManager;
})();

var behaviorManager = new BehaviorManager();

var BASE_URL = 'http://gm.mmstat.com/fsp.1.1';
function track(graphType) {
  var version = global.version;
  var trackable = global.trackable;

  if (!trackable) {
    return;
  }

  var _window = window,
    location = _window.location,
    navigator = _window.navigator;
  var image = new Image();
  var params = toQueryString({
    pid: 'ggeditor',
    code: '11',
    msg: 'syslog',
    page: location.protocol + '//' + location.host + location.pathname,
    hash: location.hash,
    ua: navigator.userAgent,
    rel: version,
    c1: graphType,
  });
  image.src = BASE_URL + '?' + params;
}

var redoCommand = {
  name: 'redo',
  params: {},
  canExecute: function canExecute(graph) {
    var commandManager = graph.get('commandManager');
    var commandQueue = commandManager.commandQueue,
      commandIndex = commandManager.commandIndex;
    return commandIndex < commandQueue.length;
  },
  shouldExecute: function shouldExecute() {
    return true;
  },
  canUndo: function canUndo() {
    return false;
  },
  init: function init() {},
  execute: function execute(graph) {
    var commandManager = graph.get('commandManager');
    var commandQueue = commandManager.commandQueue,
      commandIndex = commandManager.commandIndex;
    commandQueue[commandIndex].execute(graph);
    commandManager.commandIndex += 1;
  },
  undo: function undo() {},
  shortcuts: [
    ['metaKey', 'shiftKey', 'z'],
    ['ctrlKey', 'shiftKey', 'z'],
  ],
};

var undoCommand = {
  name: 'undo',
  params: {},
  canExecute: function canExecute(graph) {
    var commandManager = graph.get('commandManager');
    var commandIndex = commandManager.commandIndex;
    return commandIndex > 0;
  },
  shouldExecute: function shouldExecute() {
    return true;
  },
  canUndo: function canUndo() {
    return false;
  },
  init: function init() {},
  execute: function execute(graph) {
    var commandManager = graph.get('commandManager');
    var commandQueue = commandManager.commandQueue,
      commandIndex = commandManager.commandIndex;
    commandQueue[commandIndex - 1].undo(graph);
    commandManager.commandIndex -= 1;
  },
  undo: function undo() {},
  shortcuts: [
    ['metaKey', 'z'],
    ['ctrlKey', 'z'],
  ],
};

var baseCommand = {
  name: '',
  params: {},
  canExecute: function canExecute() {
    return true;
  },
  shouldExecute: function shouldExecute() {
    return true;
  },
  canUndo: function canUndo() {
    return true;
  },
  init: function init() {},
  execute: function execute() {},
  undo: function undo() {},
  shortcuts: [],
  isMind: isMind,
  getSelectedNodes: getSelectedNodes,
  getSelectedEdges: getSelectedEdges,
  setSelectedItems: setSelectedItems,
  editSelectedNode: function editSelectedNode(graph) {
    graph.emit(EditorEvent.onLabelStateChange, {
      labelState: LabelState.Show,
    });
  },
};

var addCommand = _extends({}, baseCommand, {
  params: {
    type: ItemType.Node,
    model: {
      id: '',
    },
  },
  init: function init() {
    var model = this.params.model;

    if (model.id) {
      return;
    }

    model.id = guid();
  },
  execute: function execute(graph) {
    var _this$params = this.params,
      type = _this$params.type,
      model = _this$params.model;
    graph.add(type, model);
    this.setSelectedItems(graph, [model.id]);
  },
  undo: function undo(graph) {
    var model = this.params.model;
    graph.remove(model.id);
  },
});

var removeCommand = _extends({}, baseCommand, {
  params: {
    flow: {
      nodes: {},
      edges: {},
    },
    mind: {
      model: null,
      parent: '',
    },
  },
  canExecute: function canExecute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);
    var selectedEdges = this.getSelectedEdges(graph);
    return !!(selectedNodes.length || selectedEdges.length);
  },
  init: function init(graph) {
    var selectedNodes = this.getSelectedNodes(graph);
    var selectedEdges = this.getSelectedEdges(graph);

    if (isMind(graph)) {
      var selectedNode = selectedNodes[0];
      var selectedNodeModel = selectedNode.getModel();
      var selectedNodeParent = selectedNode.get('parent');
      var selectedNodeParentModel = selectedNodeParent ? selectedNodeParent.getModel() : {};
      this.params.mind = {
        model: selectedNodeModel,
        parent: selectedNodeParentModel.id,
      };
    } else {
      var _this$params$flow = this.params.flow,
        nodes = _this$params$flow.nodes,
        edges = _this$params$flow.edges;
      selectedNodes.forEach(function(node) {
        var nodeModel = node.getModel();
        var nodeEdges = node.getEdges();
        nodes[nodeModel.id] = nodeModel;
        nodeEdges.forEach(function(edge) {
          var edgeModel = edge.getModel();
          edges[edgeModel.id] = edgeModel;
        });
      });
      selectedEdges.forEach(function(edge) {
        var edgeModel = edge.getModel();
        edges[edgeModel.id] = edgeModel;
      });
    }
  },
  execute: function execute(graph) {
    if (isMind(graph)) {
      var model = this.params.mind.model;

      if (!model) {
        return;
      }

      graph.removeChild(model.id);
    } else {
      var _this$params$flow2 = this.params.flow,
        nodes = _this$params$flow2.nodes,
        edges = _this$params$flow2.edges;
      executeBatch(graph, function() {
        [].concat(Object.keys(nodes), Object.keys(edges)).forEach(function(id) {
          graph.removeItem(id);
        });
      });
    }
  },
  undo: function undo(graph) {
    if (isMind(graph)) {
      var _this$params$mind = this.params.mind,
        model = _this$params$mind.model,
        parent = _this$params$mind.parent;

      if (!model) {
        return;
      }

      graph.addChild(model, parent);
    } else {
      var _this$params$flow3 = this.params.flow,
        nodes = _this$params$flow3.nodes,
        edges = _this$params$flow3.edges;
      executeBatch(graph, function() {
        Object.keys(nodes).forEach(function(id) {
          var model = nodes[id];
          graph.addItem(ItemType.Node, model);
        });
        Object.keys(edges).forEach(function(id) {
          var model = edges[id];
          graph.addItem(ItemType.Edge, model);
        });
      });
    }
  },
  shortcuts: ['Delete', 'Backspace'],
});

var updateCommand = _extends({}, baseCommand, {
  params: {
    id: '',
    originModel: {},
    updateModel: {},
    forceRefreshLayout: false,
  },
  canExecute: function canExecute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);
    var selectedEdges = this.getSelectedEdges(graph);
    return (selectedNodes.length || selectedEdges.length) && (selectedNodes.length === 1 || selectedEdges.length === 1)
      ? true
      : false;
  },
  init: function init(graph) {
    var _this$params = this.params,
      id = _this$params.id,
      updateModel = _this$params.updateModel;
    var updatePaths = Object.keys(updateModel);
    var originModel = pick(graph.findById(id).getModel(), updatePaths);
    this.params.originModel = originModel;
  },
  execute: function execute(graph) {
    var _this$params2 = this.params,
      id = _this$params2.id,
      updateModel = _this$params2.updateModel,
      forceRefreshLayout = _this$params2.forceRefreshLayout;
    graph.updateItem(id, updateModel);

    if (forceRefreshLayout) {
      graph.refreshLayout && graph.refreshLayout(false);
    }
  },
  undo: function undo(graph) {
    var _this$params3 = this.params,
      id = _this$params3.id,
      originModel = _this$params3.originModel;
    graph.updateItem(id, originModel);
  },
});

var copyCommand = _extends({}, baseCommand, {
  canExecute: function canExecute(graph) {
    return !!this.getSelectedNodes(graph).length;
  },
  canUndo: function canUndo() {
    return false;
  },
  execute: function execute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);
    global.clipboard.models = cloneDeep(
      selectedNodes.map(function(node) {
        return node.getModel();
      }),
    );
  },
  shortcuts: [
    ['metaKey', 'c'],
    ['ctrlKey', 'c'],
  ],
});

var pasteCommand = _extends({}, baseCommand, {
  params: {
    models: [],
  },
  canExecute: function canExecute() {
    return !!global.clipboard.models.length;
  },
  init: function init() {
    var models = global.clipboard.models;
    var offsetX = 10;
    var offsetY = 10;
    this.params = {
      models: models.map(function(model) {
        var x = model.x,
          y = model.y;
        return _extends({}, model, {
          id: guid(),
          x: x + offsetX,
          y: y + offsetY,
        });
      }),
    };
  },
  execute: function execute(graph) {
    var models = this.params.models;
    executeBatch(graph, function() {
      models.forEach(function(model) {
        graph.addItem(ItemType.Node, model);
      });
    });
    this.setSelectedItems(
      graph,
      models.map(function(model) {
        return model.id;
      }),
    );
  },
  undo: function undo(graph) {
    var models = this.params.models;
    executeBatch(graph, function() {
      models.forEach(function(model) {
        graph.removeItem(model.id);
      });
    });
  },
  shortcuts: [
    ['metaKey', 'v'],
    ['ctrlKey', 'v'],
  ],
});

var pasteHereCommand = _extends({}, pasteCommand, {
  params: {
    models: [],
  },
  init: function init() {
    var _global$clipboard = global.clipboard,
      point = _global$clipboard.point,
      models = _global$clipboard.models;
    this.params = {
      models: models.map(function(model) {
        var x = model.x,
          y = model.y;
        var offsetX = point.x - x;
        var offsetY = point.y - y;
        return _extends({}, model, {
          id: guid(),
          x: x + offsetX,
          y: y + offsetY,
        });
      }),
    };
  },
  shortcuts: [],
});

var DELTA = 0.05;

var zoomInCommand = _extends({}, baseCommand, {
  canUndo: function canUndo() {
    return false;
  },
  execute: function execute(graph) {
    var ratio = 1 + DELTA;
    var zoom = graph.getZoom() * ratio;
    var maxZoom = graph.get('maxZoom');

    if (zoom > maxZoom) {
      return;
    }

    graph.zoom(ratio);
  },
  shortcuts: [
    ['metaKey', '='],
    ['ctrlKey', '='],
  ],
});

var DELTA$1 = 0.05;

var zoomOutCommand = _extends({}, baseCommand, {
  canUndo: function canUndo() {
    return false;
  },
  execute: function execute(graph) {
    var ratio = 1 - DELTA$1;
    var zoom = graph.getZoom() * ratio;
    var minZoom = graph.get('minZoom');

    if (zoom < minZoom) {
      return;
    }

    graph.zoom(ratio);
  },
  shortcuts: [
    ['metaKey', '-'],
    ['ctrlKey', '-'],
  ],
});

var baseCommands = {
  redo: redoCommand,
  undo: undoCommand,
  add: addCommand,
  remove: removeCommand,
  update: updateCommand,
  copy: copyCommand,
  paste: pasteCommand,
  pasteHere: pasteHereCommand,
  zoomIn: zoomInCommand,
  zoomOut: zoomOutCommand,
};

var topicCommand = _extends({}, baseCommand, {
  params: {
    id: '',
    model: {
      id: '',
    },
  },
  canExecute: function canExecute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);
    return selectedNodes.length && selectedNodes.length === 1 && selectedNodes[0].get('parent');
  },
  init: function init(graph) {
    if (this.params.id) {
      return;
    }

    var selectedNode = this.getSelectedNodes(graph)[0];
    this.params = {
      id: selectedNode.get('id'),
      model: {
        id: guid(),
        label: LABEL_DEFAULT_TEXT,
      },
    };
  },
  execute: function execute(graph) {
    var _this$params = this.params,
      id = _this$params.id,
      model = _this$params.model;
    var parent = graph.findById(id).get('parent'); // 添加节点

    graph.addChild(model, parent); // 选中节点

    this.setSelectedItems(graph, [model.id]); // 编辑节点

    this.editSelectedNode(graph);
  },
  undo: function undo(graph) {
    var _this$params2 = this.params,
      id = _this$params2.id,
      model = _this$params2.model;
    this.setSelectedItems(graph, [id]);
    graph.removeChild(model.id);
  },
  shortcuts: ['Enter'],
});

var subtopicCommand = _extends({}, topicCommand, {
  canExecute: function canExecute(graph) {
    return this.getSelectedNodes(graph)[0] ? true : false;
  },
  execute: function execute(graph) {
    var _this$params = this.params,
      id = _this$params.id,
      model = _this$params.model; // 添加节点

    graph.addChild(model, id); // 选中节点

    this.setSelectedItems(graph, [model.id]); // 编辑节点

    this.editSelectedNode(graph);
  },
  shortcuts: ['Tab'],
});

var foldCommand = _extends({}, baseCommand, {
  params: {
    id: '',
  },
  canExecute: function canExecute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);

    if (!selectedNodes.length) {
      return false;
    }

    var selectedNode = selectedNodes[0];
    var selectedNodeModel = selectedNode.getModel();

    if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
      return false;
    }

    if (selectedNodeModel.collapsed) {
      return false;
    }

    return true;
  },
  init: function init(graph) {
    var selectedNode = this.getSelectedNodes(graph)[0];
    var selectedNodeModel = selectedNode.getModel();
    this.params = {
      id: selectedNodeModel.id,
    };
  },
  execute: function execute(graph) {
    var id = this.params.id;
    var sourceData = graph.findDataById(id);
    sourceData.collapsed = !sourceData.collapsed;
    graph.refreshLayout(false);
  },
  undo: function undo(graph) {
    this.execute(graph);
  },
  shortcuts: [
    ['metaKey', '/'],
    ['ctrlKey', '/'],
  ],
});

var unfoldCommand = _extends({}, foldCommand, {
  canExecute: function canExecute(graph) {
    var selectedNodes = this.getSelectedNodes(graph);

    if (!selectedNodes.length) {
      return false;
    }

    var selectedNode = selectedNodes[0];
    var selectedNodeModel = selectedNode.getModel();

    if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
      return false;
    }

    if (!selectedNodeModel.collapsed) {
      return false;
    }

    return true;
  },
  shortcuts: [
    ['metaKey', '/'],
    ['ctrlKey', '/'],
  ],
});

var mindCommands = {
  topic: topicCommand,
  subtopic: subtopicCommand,
  fold: foldCommand,
  unfold: unfoldCommand,
};

var clickItemBehavior = {
  getDefaultCfg: function getDefaultCfg() {
    return {
      multiple: true,
      keydown: false,
      keyCode: 17,
    };
  },
  getEvents: function getEvents() {
    return {
      'node:click': 'handleItemClick',
      'edge:click': 'handleItemClick',
      'canvas:click': 'handleCanvasClick',
      keydown: 'handleKeyDown',
      keyup: 'handleKeyUp',
    };
  },
  handleItemClick: function handleItemClick(_ref) {
    var item = _ref.item;
    var graph = this.graph;

    if (isMind(graph) && isEdge(item)) {
      return;
    }

    var isSelected = item.hasState(ItemState.Selected);

    if (this.multiple && this.keydown) {
      graph.setItemState(item, ItemState.Selected, !isSelected);
    } else {
      clearSelectedState(graph, function(selectedItem) {
        return selectedItem !== item;
      });

      if (!isSelected) {
        graph.setItemState(item, ItemState.Selected, true);
      }
    }

    graph.emit(EditorEvent.onGraphStateChange, {
      graphState: getGraphState(graph),
    });
  },
  handleCanvasClick: function handleCanvasClick() {
    var graph = this.graph;
    clearSelectedState(graph);
    graph.emit(EditorEvent.onGraphStateChange, {
      graphState: GraphState.CanvasSelected,
    });
  },
  handleKeyDown: function handleKeyDown(e) {
    this.keydown = (e.keyCode || e.which) === this.keyCode;
  },
  handleKeyUp: function handleKeyUp() {
    this.keydown = false;
  },
};
behaviorManager.register('click-item', clickItemBehavior);

var hoverItemBehavior = {
  getEvents: function getEvents() {
    return {
      'node:mouseenter': 'handleItemMouseenter',
      'edge:mouseenter': 'handleItemMouseenter',
      'node:mouseleave': 'handleItemMouseleave',
      'edge:mouseleave': 'handleItemMouseleave',
    };
  },
  handleItemMouseenter: function handleItemMouseenter(_ref) {
    var item = _ref.item;
    var graph = this.graph;
    graph.setItemState(item, ItemState.Active, true);
  },
  handleItemMouseleave: function handleItemMouseleave(_ref2) {
    var item = _ref2.item;
    var graph = this.graph;
    graph.setItemState(item, ItemState.Active, false);
  },
};
behaviorManager.register('hover-item', hoverItemBehavior);

var dragCanvasBehavior = {
  origin: null,
  keyCode: null,
  dragging: false,
  handleWindowMouseUp: null,
  getDefaultCfg: function getDefaultCfg() {
    return {
      allowKeyCode: [],
      notAllowKeyCode: [16],
    };
  },
  getEvents: function getEvents() {
    return {
      'canvas:dragstart': 'handleCanvasDragStart',
      'canvas:drag': 'handleCanvasDrag',
      'canvas:dragend': 'handleCanvasDragEnd',
      'canvas:mouseleave': 'handleCanvasMouseLeave',
      'canvas:contextmenu': 'handleCanvasContextMenu',
      keydown: 'handleKeyDown',
      keyup: 'handleKeyUp',
    };
  },
  canDrag: function canDrag() {
    var keyCode = this.keyCode,
      allowKeyCode = this.allowKeyCode,
      notAllowKeyCode = this.notAllowKeyCode;
    var isAllow = !!!allowKeyCode.length;

    if (!keyCode) {
      return isAllow;
    }

    if (allowKeyCode.length && allowKeyCode.includes(keyCode)) {
      isAllow = true;
    }

    if (notAllowKeyCode.includes(keyCode)) {
      isAllow = false;
    }

    return isAllow;
  },
  updateViewport: function updateViewport(e) {
    var clientX = e.clientX,
      clientY = e.clientY;
    var dx = clientX - this.origin.x;
    var dy = clientY - this.origin.y;
    this.origin = {
      x: clientX,
      y: clientY,
    };
    this.graph.translate(dx, dy);
    this.graph.paint();
  },
  handleCanvasDragStart: function handleCanvasDragStart(e) {
    if (!this.shouldBegin.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    this.origin = {
      x: e.clientX,
      y: e.clientY,
    };
    this.dragging = false;
  },
  handleCanvasDrag: function handleCanvasDrag(e) {
    if (!this.shouldUpdate.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    if (!this.origin) {
      return;
    }

    if (!this.dragging) {
      this.dragging = true;
    } else {
      this.updateViewport(e);
    }
  },
  handleCanvasDragEnd: function handleCanvasDragEnd(e) {
    if (!this.shouldEnd.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    this.origin = null;
    this.dragging = false;

    if (this.handleWindowMouseUp) {
      document.body.removeEventListener('mouseup', this.handleWindowMouseUp, false);
      this.handleWindowMouseUp = null;
    }
  },
  handleCanvasMouseLeave: function handleCanvasMouseLeave() {
    var _this = this;

    var canvasElement = this.graph.get('canvas').get('el');

    if (this.handleWindowMouseUp) {
      return;
    }

    this.handleWindowMouseUp = function(e) {
      if (e.target !== canvasElement) {
        _this.handleCanvasDragEnd();
      }
    };

    document.body.addEventListener('mouseup', this.handleWindowMouseUp, false);
  },
  handleCanvasContextMenu: function handleCanvasContextMenu() {
    this.origin = null;
    this.dragging = false;
  },
  handleKeyDown: function handleKeyDown(e) {
    this.keyCode = e.keyCode || e.which;
  },
  handleKeyUp: function handleKeyUp() {
    this.keyCode = null;
  },
};
behaviorManager.register('drag-canvas', dragCanvasBehavior);

var recallEdgeBehavior = {
  edgeIds: [],
  getEvents: function getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'edge:click': 'handleEdgeClick',
      'canvas:click': 'handleCanvasClick',
    };
  },
  setHighLightState: function setHighLightState(edges) {
    var graph = this.graph;
    this.clearHighLightState();
    executeBatch(graph, function() {
      edges.forEach(function(item) {
        graph.setItemState(item, ItemState.HighLight, true);
      });
    });
    this.edgeIds = edges.map(function(edge) {
      return edge.get('id');
    });
  },
  clearHighLightState: function clearHighLightState() {
    var _this = this;

    var graph = this.graph;
    executeBatch(graph, function() {
      _this.edgeIds.forEach(function(id) {
        var item = graph.findById(id);

        if (item && !item.destroyed) {
          graph.setItemState(item, ItemState.HighLight, false);
        }
      });
    });
    this.edgeIds = [];
  },
  handleNodeClick: function handleNodeClick(_ref) {
    var item = _ref.item;
    var graph = this.graph;
    var edges = [];

    if (isFlow(graph)) {
      edges = getFlowRecallEdges(graph, item);
    }

    if (isMind(graph)) {
      edges = getMindRecallEdges(graph, item);
    }

    this.setHighLightState(edges);
  },
  handleEdgeClick: function handleEdgeClick() {
    this.clearHighLightState();
  },
  handleCanvasClick: function handleCanvasClick() {
    this.clearHighLightState();
  },
};
behaviorManager.register('recall-edge', recallEdgeBehavior);

var GraphComponent = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(GraphComponent, _React$Component);

  function GraphComponent() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.graph = null;
    return _this;
  }

  var _proto = GraphComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.initGraph();
    this.bindEvent();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var data = this.props.data;

    if (data !== prevProps.data) {
      this.changeData(data);
    }
  };

  _proto.focusRootNode = function focusRootNode(graph, data) {
    if (!isMind(graph)) {
      return;
    }

    var id = data.id;
    graph.focusItem(id);
  };

  _proto.initGraph = function initGraph() {
    var _this$props = this.props,
      containerId = _this$props.containerId,
      parseData = _this$props.parseData,
      initGraph = _this$props.initGraph,
      setGraph = _this$props.setGraph,
      commandManager = _this$props.commandManager;

    var _ref = document.getElementById(containerId) || {},
      _ref$clientWidth = _ref.clientWidth,
      clientWidth = _ref$clientWidth === void 0 ? 0 : _ref$clientWidth,
      _ref$clientHeight = _ref.clientHeight,
      clientHeight = _ref$clientHeight === void 0 ? 0 : _ref$clientHeight; // 解析数据

    var data = _extends({}, this.props.data);

    parseData(data); // 初始画布

    this.graph = initGraph(clientWidth, clientHeight);
    this.graph.data(data);
    this.graph.render();
    this.focusRootNode(this.graph, data);
    this.graph.setMode('default');
    setGraph(this.graph); // 设置命令管理器

    this.graph.set('commandManager', commandManager); // 注册命令

    var commands = baseCommands;

    if (isMind(this.graph)) {
      commands = _extends({}, commands, mindCommands);
    }

    Object.keys(commands).forEach(function(name) {
      commandManager.register(name, commands[name]);
    }); // 发送埋点

    if (global.trackable) {
      var graphType = isMind(this.graph) ? GraphType.Mind : GraphType.Flow;
      track(graphType);
    }
  };

  _proto.bindEvent = function bindEvent() {
    var graph = this.graph,
      props = this.props;

    if (!graph) {
      return;
    }

    var events = _extends({}, GraphCommonEvent, GraphNodeEvent, GraphEdgeEvent, GraphCanvasEvent, GraphCustomEvent);

    Object.keys(events).forEach(function(event) {
      if (typeof props[event] === 'function') {
        graph.on(events[event], props[event]);
      }
    });
  };

  _proto.changeData = function changeData(data) {
    var graph = this.graph;
    var parseData = this.props.parseData;

    if (!graph) {
      return;
    }

    parseData(data);
    graph.changeData(data);
    this.focusRootNode(graph, data);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
      containerId = _this$props2.containerId,
      children = _this$props2.children;
    return /*#__PURE__*/ React.createElement(
      'div',
      Object.assign(
        {
          id: containerId,
        },
        pick(this.props, ['className', 'style']),
      ),
      children,
    );
  };

  return GraphComponent;
})(React.Component);

var GraphComponent$1 = withEditorPrivateContext(GraphComponent);

var dragAddNodeBehavior = {
  shape: null,
  graphType: GraphType.Flow,
  graphMode: GraphMode.AddNode,
  getEvents: function getEvents() {
    return {
      'canvas:mouseenter': 'handleCanvasMouseEnter',
      mousemove: 'handleMouseMove',
      mouseup: 'handleMouseUp',
    };
  },
  handleCanvasMouseEnter: function handleCanvasMouseEnter(e) {
    var graph = this.graph,
      shape = this.shape;

    if (shape) {
      return;
    }

    var group = graph.get('group');
    var model = global.component.itemPanel.model;
    var _model$size = model.size,
      size = _model$size === void 0 ? 100 : _model$size;
    var width = 0;
    var height = 0;

    if (isArray(size)) {
      width = size[0];
      height = size[1];
    } else {
      width = size;
      height = size;
    }

    var x = e.x - width / 2;
    var y = e.y - height / 2;
    this.shape = group.addShape('rect', {
      className: global.component.itemPanel.delegateShapeClassName,
      attrs: {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: '#f3f9ff',
        fillOpacity: 0.5,
        stroke: '#1890ff',
        strokeOpacity: 0.9,
        lineDash: [5, 5],
      },
    });
    graph.paint();
  },
  handleMouseMove: function handleMouseMove(e) {
    var graph = this.graph;

    var _this$shape$getBBox = this.shape.getBBox(),
      width = _this$shape$getBBox.width,
      height = _this$shape$getBBox.height;

    var x = e.x - width / 2;
    var y = e.y - height / 2;
    this.shape.attr({
      x: x,
      y: y,
    });
    graph.paint();
  },
  handleMouseUp: function handleMouseUp(e) {
    var graph = this.graph;

    var _this$shape$getBBox2 = this.shape.getBBox(),
      width = _this$shape$getBBox2.width,
      height = _this$shape$getBBox2.height;

    var x = e.x;
    var y = e.y;
    var model = global.component.itemPanel.model;

    if (model.center === 'topLeft') {
      x -= width / 2;
      y -= height / 2;
    }

    this.shape.remove(true);
    var commandManager = graph.get('commandManager');
    commandManager.execute(graph, EditorCommand.Add, {
      type: ItemType.Node,
      model: _extends(
        {
          id: guid(),
          x: x,
          y: y,
        },
        model,
      ),
    });
  },
};
behaviorManager.register('drag-add-node', dragAddNodeBehavior);

var dragAddEdgeBehavior = {
  edge: null,
  graphType: GraphType.Flow,
  getDefaultCfg: function getDefaultCfg() {
    return {
      edgeType: 'bizFlowEdge',
      getAnchorPointStateOfSourceNode: function getAnchorPointStateOfSourceNode() {
        return AnchorPointState.Enabled;
      },
      getAnchorPointStateOfTargetNode: function getAnchorPointStateOfTargetNode() {
        return AnchorPointState.Enabled;
      },
    };
  },
  getEvents: function getEvents() {
    return {
      'node:mouseenter': 'handleNodeMouseEnter',
      'node:mouseleave': 'handleNodeMouseLeave',
      'node:mousedown': 'handleNodeMouseDown',
      mousemove: 'handleMouseMove',
      mouseup: 'handleMouseUp',
    };
  },
  isEnabledAnchorPoint: function isEnabledAnchorPoint(e) {
    var target = e.target;
    return !!target.get('isAnchorPoint') && target.get('anchorPointState') === AnchorPointState.Enabled;
  },
  isNotSelf: function isNotSelf(e) {
    var edge = this.edge;
    var item = e.item;
    return item.getModel().id !== edge.getSource().getModel().id;
  },
  getTargetNodes: function getTargetNodes(sourceId) {
    var graph = this.graph;
    var nodes = graph.getNodes();
    return nodes.filter(function(node) {
      return node.getModel().id !== sourceId;
    });
  },
  canFindTargetAnchorPoint: function canFindTargetAnchorPoint(e) {
    return this.isEnabledAnchorPoint(e) && this.isNotSelf(e);
  },
  shouldAddDelegateEdge: function shouldAddDelegateEdge(e) {
    return this.isEnabledAnchorPoint(e);
  },
  shouldAddRealEdge: function shouldAddRealEdge() {
    var edge = this.edge;
    var target = edge.getTarget();
    return !isPlainObject(target);
  },
  handleNodeMouseEnter: function handleNodeMouseEnter(e) {
    var graph = this.graph,
      getAnchorPointStateOfSourceNode = this.getAnchorPointStateOfSourceNode;
    var sourceNode = e.item;
    var sourceAnchorPoints = sourceNode.getAnchorPoints();
    var sourceAnchorPointsState = [];
    sourceAnchorPoints.forEach(function(sourceAnchorPoint) {
      sourceAnchorPointsState.push(getAnchorPointStateOfSourceNode(sourceNode, sourceAnchorPoint));
    });
    sourceNode.set('anchorPointsState', sourceAnchorPointsState);
    graph.setItemState(sourceNode, ItemState.ActiveAnchorPoints, true);
  },
  handleNodeMouseLeave: function handleNodeMouseLeave(e) {
    var graph = this.graph,
      edge = this.edge;
    var item = e.item;

    if (!edge) {
      item.set('anchorPointsState', []);
      graph.setItemState(item, ItemState.ActiveAnchorPoints, false);
    }
  },
  handleNodeMouseDown: function handleNodeMouseDown(e) {
    if (!this.shouldBegin(e) || !this.shouldAddDelegateEdge(e)) {
      return;
    }

    var graph = this.graph,
      edgeType = this.edgeType,
      getAnchorPointStateOfTargetNode = this.getAnchorPointStateOfTargetNode;
    var target = e.target;
    var sourceNode = e.item;
    var sourceNodeId = sourceNode.getModel().id;
    var sourceAnchorPointIndex = target.get('anchorPointIndex');
    var sourceAnchorPoint = sourceNode.getAnchorPoints()[sourceAnchorPointIndex];
    var model = {
      id: guid(),
      type: edgeType,
      source: sourceNodeId,
      sourceAnchor: sourceAnchorPointIndex,
      target: {
        x: e.x,
        y: e.y,
      },
    };
    this.edge = graph.addItem(ItemType.Edge, model);
    graph.getNodes().forEach(function(targetNode) {
      if (targetNode.getModel().id === sourceNodeId) {
        return;
      }

      var targetAnchorPoints = targetNode.getAnchorPoints();
      var targetAnchorPointsState = [];
      targetAnchorPoints.forEach(function(targetAnchorPoint) {
        targetAnchorPointsState.push(
          getAnchorPointStateOfTargetNode(sourceNode, sourceAnchorPoint, targetNode, targetAnchorPoint),
        );
      });
      targetNode.set('anchorPointsState', targetAnchorPointsState);
      graph.setItemState(targetNode, ItemState.ActiveAnchorPoints, true);
    });
  },
  handleMouseMove: function handleMouseMove(e) {
    var graph = this.graph,
      edge = this.edge;

    if (!edge) {
      return;
    }

    if (this.canFindTargetAnchorPoint(e)) {
      var item = e.item,
        target = e.target;
      var targetId = item.getModel().id;
      var targetAnchor = target.get('anchorPointIndex');
      graph.updateItem(edge, {
        target: targetId,
        targetAnchor: targetAnchor,
      });
    } else {
      graph.updateItem(edge, {
        target: {
          x: e.x,
          y: e.y,
        },
        targetAnchor: undefined,
      });
    }
  },
  handleMouseUp: function handleMouseUp() {
    var graph = this.graph,
      edge = this.edge;

    if (!edge) {
      return;
    }

    if (!this.shouldAddRealEdge()) {
      graph.removeItem(this.edge);
    }

    graph.emit(GraphCustomEvent.onAfterConnect, {
      edge: this.edge,
    });
    this.edge = null;
    graph.getNodes().forEach(function(node) {
      node.set('anchorPointsState', []);
      graph.setItemState(node, ItemState.ActiveAnchorPoints, false);
    });
  },
};
behaviorManager.register('drag-add-edge', dragAddEdgeBehavior);

var Flow = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Flow, _React$Component);

  function Flow() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.graph = null;
    _this.containerId = FLOW_CONTAINER_ID + '_' + guid();

    _this.canDragNode = function(e) {
      return !['anchor', 'banAnchor'].some(function(item) {
        return item === e.target.get('className');
      });
    };

    _this.canDragOrZoomCanvas = function() {
      var _assertThisInitialize = _assertThisInitialized(_this),
        graph = _assertThisInitialize.graph;

      if (!graph) {
        return false;
      }

      return (
        global.plugin.itemPopover.state === 'hide' &&
        global.plugin.contextMenu.state === 'hide' &&
        global.plugin.editableLabel.state === 'hide'
      );
    };

    _this.parseData = function(data) {
      var nodes = data.nodes,
        edges = data.edges;
      [].concat(nodes, edges).forEach(function(item) {
        var id = item.id;

        if (id) {
          return;
        }

        item.id = guid();
      });
    };

    _this.initGraph = function(width, height) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        containerId = _assertThisInitialize2.containerId;

      var _this$props = _this.props,
        graphConfig = _this$props.graphConfig,
        customModes = _this$props.customModes;
      console.log('graphConfig', graphConfig);
      var def = {
        'drag-canvas': {
          type: 'drag-canvas',
          shouldBegin: _this.canDragOrZoomCanvas,
          shouldUpdate: _this.canDragOrZoomCanvas,
        },
        'zoom-canvas': {
          type: 'zoom-canvas',
          shouldUpdate: _this.canDragOrZoomCanvas,
        },
      };

      if (!_this.props.disable) {
        def['drag-node'] = {
          type: 'drag-node',
          shouldBegin: _this.canDragNode,
        };
        def['recall-edge'] = 'recall-edge';
        def['brush-select'] = 'brush-select';
      }

      var modes = merge(_this.props.disable ? {} : behaviorManager.getRegisteredBehaviors(GraphType.Flow), {
        default: def,
      });
      Object.keys(modes).forEach(function(mode) {
        var behaviors = modes[mode];
        modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
      });
      _this.graph = new G6.Graph(
        _extends(
          {
            container: containerId,
            width: width,
            height: height,
            modes: modes,
            defaultNode: {
              type: 'bizFlowNode',
            },
            defaultEdge: {
              type: 'bizFlowEdge',
            },
          },
          graphConfig,
        ),
      );
      return _this.graph;
    };

    return _this;
  }

  var _proto = Flow.prototype;

  _proto.render = function render() {
    var containerId = this.containerId,
      parseData = this.parseData,
      initGraph = this.initGraph;
    return /*#__PURE__*/ React.createElement(
      GraphComponent$1,
      Object.assign(
        {
          containerId: containerId,
          parseData: parseData,
          initGraph: initGraph,
        },
        omit(this.props, ['graphConfig', 'customModes']),
      ),
    );
  };

  return Flow;
})(React.Component);

Flow.defaultProps = {
  graphConfig: {},
};

var Mind = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Mind, _React$Component);

  function Mind() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.graph = null;
    _this.containerId = MIND_CONTAINER_ID + '_' + guid();

    _this.canDragOrZoomCanvas = function() {
      var _assertThisInitialize = _assertThisInitialized(_this),
        graph = _assertThisInitialize.graph;

      if (!graph) {
        return false;
      }

      return (
        global.plugin.itemPopover.state === 'hide' &&
        global.plugin.contextMenu.state === 'hide' &&
        global.plugin.editableLabel.state === 'hide'
      );
    };

    _this.canCollapseExpand = function(_ref) {
      var target = _ref.target;
      return target && [FOLD_BUTTON_CLASS_NAME, UNFOLD_BUTTON_CLASS_NAME].includes(target.get('className'));
    };

    _this.parseData = function(data) {
      recursiveTraversal(data, function(item) {
        var id = item.id;

        if (id) {
          return;
        }

        item.id = guid();
      });
    };

    _this.initGraph = function(width, height) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        containerId = _assertThisInitialize2.containerId;

      var _this$props = _this.props,
        graphConfig = _this$props.graphConfig,
        customModes = _this$props.customModes;
      var modes = merge(behaviorManager.getRegisteredBehaviors(GraphType.Mind), {
        default: {
          'click-item': {
            type: 'click-item',
            multiple: false,
          },
          'collapse-expand': {
            type: 'collapse-expand',
            shouldBegin: _this.canCollapseExpand,
          },
          'drag-canvas': {
            type: 'drag-canvas',
            shouldBegin: _this.canDragOrZoomCanvas,
            shouldUpdate: _this.canDragOrZoomCanvas,
          },
          'zoom-canvas': {
            type: 'zoom-canvas',
            shouldUpdate: _this.canDragOrZoomCanvas,
          },
        },
      });
      Object.keys(modes).forEach(function(mode) {
        var behaviors = modes[mode];
        modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
      });
      _this.graph = new G6.TreeGraph(
        _extends(
          {
            container: containerId,
            width: width,
            height: height,
            modes: modes,
            layout: {
              type: 'mindmap',
              direction: 'H',
              getWidth: function getWidth() {
                return 120;
              },
              getHeight: function getHeight() {
                return 60;
              },
              getHGap: function getHGap() {
                return 100;
              },
              getVGap: function getVGap() {
                return 50;
              },
              getSide: function getSide(_ref2) {
                var data = _ref2.data;

                if (data.side) {
                  return data.side;
                }

                return 'right';
              },
            },
            animate: false,
            defaultNode: {
              type: 'bizMindNode',
            },
            defaultEdge: {
              type: 'bizMindEdge',
            },
          },
          graphConfig,
        ),
      );
      return _this.graph;
    };

    return _this;
  }

  var _proto = Mind.prototype;

  _proto.render = function render() {
    var containerId = this.containerId,
      parseData = this.parseData,
      initGraph = this.initGraph;
    var data = this.props.data;
    return /*#__PURE__*/ React.createElement(
      GraphComponent$1,
      Object.assign(
        {
          containerId: containerId,
          data: data,
          parseData: parseData,
          initGraph: initGraph,
        },
        omit(this.props, ['graphConfig', 'customModes']),
      ),
    );
  };

  return Mind;
})(React.Component);

Mind.defaultProps = {
  graphConfig: {},
};

var Command = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Command, _React$Component);

  function Command() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      disabled: false,
    };

    _this.handleClick = function() {
      var _this$props = _this.props,
        name = _this$props.name,
        executeCommand = _this$props.executeCommand;
      executeCommand(name);
    };

    return _this;
  }

  var _proto = Command.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _this$props2 = this.props,
      graph = _this$props2.graph,
      name = _this$props2.name;
    var commandManager = graph.get('commandManager');
    this.setState({
      disabled: !commandManager.canExecute(graph, name),
    });
    graph.on(EditorEvent.onGraphStateChange, function() {
      _this2.setState({
        disabled: !commandManager.canExecute(graph, name),
      });
    });
  };

  _proto.render = function render() {
    var graph = this.props.graph;

    if (!graph) {
      return null;
    }

    var _this$props3 = this.props,
      className = _this$props3.className,
      disabledClassName = _this$props3.disabledClassName,
      children = _this$props3.children;
    var disabled = this.state.disabled;
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: '' + className + (disabled ? ' ' + disabledClassName : ''),
        onClick: this.handleClick,
      },
      children,
    );
  };

  return Command;
})(React.Component);

Command.defaultProps = {
  className: 'command',
  disabledClassName: 'command-disabled',
};
var index$2 = withEditorContext(Command);

var Item = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Item, _React$Component);

  function Item() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleMouseDown = function() {
      var _this$props = _this.props,
        graph = _this$props.graph,
        type = _this$props.type,
        model = _this$props.model;

      if (type === ItemType.Node) {
        global.component.itemPanel.model = model;
        graph.setMode(GraphMode.AddNode);
      }
    };

    return _this;
  }

  var _proto = Item.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/ React.createElement(
      'div',
      Object.assign({}, pick(this.props, ['style', 'className']), {
        onMouseDown: this.handleMouseDown,
      }),
      children,
    );
  };

  return Item;
})(React.Component);

Item.defaultProps = {
  type: ItemType.Node,
};
var Item$1 = withEditorContext(Item);

var ItemPanel = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(ItemPanel, _React$Component);

  function ItemPanel() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleMouseUp = function() {
      var graph = _this.props.graph;

      if (graph.getCurrentMode() === GraphMode.Default) {
        return;
      }

      var group = graph.get('group');
      var shape = group.findByClassName(global.component.itemPanel.delegateShapeClassName);

      if (shape) {
        shape.remove(true);
        graph.paint();
      }

      global.component.itemPanel.model = null;
      graph.setMode(GraphMode.Default);
    };

    return _this;
  }

  var _proto = ItemPanel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/ React.createElement(
      'div',
      Object.assign({}, pick(this.props, ['style', 'className'])),
      children,
    );
  };

  return ItemPanel;
})(React.Component);

ItemPanel.Item = Item$1;
var index$3 = withEditorContext(ItemPanel);

var DetailPanel = function DetailPanel() {};

DetailPanel.create = function(type) {
  return function(WrappedComponent) {
    var TypedPanel = /*#__PURE__*/ (function(_React$Component) {
      _inheritsLoose(TypedPanel, _React$Component);

      function TypedPanel() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;
        _this.state = {
          graphState: GraphState.CanvasSelected,
        };
        return _this;
      }

      var _proto = TypedPanel.prototype;

      _proto.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var graph = this.props.graph;
        graph.on(EditorEvent.onGraphStateChange, function(_ref) {
          var graphState = _ref.graphState;

          _this2.setState({
            graphState: graphState,
          });
        });
      };

      _proto.render = function render() {
        var graph = this.props.graph;
        var graphState = this.state.graphState;

        if (graphState !== type + 'Selected') {
          return null;
        }

        var nodes = getSelectedNodes(graph);
        var edges = getSelectedEdges(graph);
        return /*#__PURE__*/ React.createElement(
          WrappedComponent,
          Object.assign(
            {
              type: type,
              nodes: nodes,
              edges: edges,
            },
            this.props,
          ),
        );
      };

      return TypedPanel;
    })(React.Component);

    return withEditorContext(TypedPanel);
  };
};

var Register = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(Register, _React$Component);

  function Register(props, type) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var name = props.name,
      config = props.config,
      extend = props.extend,
      commandManager = props.commandManager;

    switch (type) {
      case 'node':
        G6.registerNode(name, config, extend);
        break;

      case 'edge':
        G6.registerEdge(name, config, extend);
        break;

      case 'command':
        commandManager.register(name, config);
        break;

      case 'behavior':
        behaviorManager.register(name, config);
        break;
    }

    return _this;
  }

  var _proto = Register.prototype;

  _proto.render = function render() {
    return null;
  };

  return Register;
})(React.Component);

Register.create = function(type) {
  var TypedRegister = /*#__PURE__*/ (function(_Register) {
    _inheritsLoose(TypedRegister, _Register);

    function TypedRegister(props) {
      return _Register.call(this, props, type) || this;
    }

    return TypedRegister;
  })(Register);

  return withEditorPrivateContext(TypedRegister);
};

var RegisterNode = Register.create('node');
var RegisterEdge = Register.create('edge');
var RegisterCommand = Register.create('command');
var RegisterBehavior = Register.create('behavior');

var ItemPopoverType;

(function(ItemPopoverType) {
  ItemPopoverType['Node'] = 'node';
  ItemPopoverType['Edge'] = 'edge';
})(ItemPopoverType || (ItemPopoverType = {}));

var ItemPopover = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(ItemPopover, _React$Component);

  function ItemPopover() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      visible: false,
      content: null,
    };
    _this.mouseEnterTimeoutID = 0;
    _this.mouseLeaveTimeoutID = 0;

    _this.showItemPopover = function(item) {
      var _this$props = _this.props,
        graph = _this$props.graph,
        renderContent = _this$props.renderContent;
      global.plugin.itemPopover.state = 'show';

      var _item$getBBox = item.getBBox(),
        minX = _item$getBBox.minX,
        minY = _item$getBBox.minY,
        maxX = _item$getBBox.maxX,
        maxY = _item$getBBox.maxY,
        centerX = _item$getBBox.centerX,
        centerY = _item$getBBox.centerY;

      var _graph$getCanvasByPoi = graph.getCanvasByPoint(minX, minY),
        itemMinX = _graph$getCanvasByPoi.x,
        itemMinY = _graph$getCanvasByPoi.y;

      var _graph$getCanvasByPoi2 = graph.getCanvasByPoint(maxX, maxY),
        itemMaxX = _graph$getCanvasByPoi2.x,
        itemMaxY = _graph$getCanvasByPoi2.y;

      var _graph$getCanvasByPoi3 = graph.getCanvasByPoint(centerX, centerY),
        itemCenterX = _graph$getCanvasByPoi3.x,
        itemCenterY = _graph$getCanvasByPoi3.y;

      var position = {
        minX: itemMinX,
        minY: itemMinY,
        maxX: itemMaxX,
        maxY: itemMaxY,
        centerX: itemCenterX,
        centerY: itemCenterY,
      };

      _this.setState({
        visible: true,
        content: renderContent(item, position),
      });
    };

    _this.hideItemPopover = function() {
      global.plugin.itemPopover.state = 'hide';

      _this.setState({
        visible: false,
        content: null,
      });
    };

    return _this;
  }

  var _proto = ItemPopover.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _this$props2 = this.props,
      graph = _this$props2.graph,
      type = _this$props2.type;

    if (type === ItemPopoverType.Node) {
      graph.on(GraphNodeEvent.onNodeMouseEnter, function(_ref) {
        var item = _ref.item;
        clearTimeout(_this2.mouseLeaveTimeoutID);
        _this2.mouseEnterTimeoutID = delay(_this2.showItemPopover, 250, item);
      });
      graph.on(GraphNodeEvent.onNodeMouseLeave, function() {
        clearTimeout(_this2.mouseEnterTimeoutID);
        _this2.mouseLeaveTimeoutID = delay(_this2.hideItemPopover, 250);
      });
    }
  };

  _proto.render = function render() {
    var graph = this.props.graph;
    var _this$state = this.state,
      visible = _this$state.visible,
      content = _this$state.content;

    if (!visible) {
      return null;
    }

    return /*#__PURE__*/ ReactDOM.createPortal(content, graph.get('container'));
  };

  return ItemPopover;
})(React.Component);

ItemPopover.defaultProps = {
  type: ItemPopoverType.Node,
};
var index$4 = withEditorContext(ItemPopover);

var ContextMenuType;

(function(ContextMenuType) {
  ContextMenuType['Canvas'] = 'canvas';
  ContextMenuType['Node'] = 'node';
  ContextMenuType['Edge'] = 'edge';
})(ContextMenuType || (ContextMenuType = {}));

var ContextMenu = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(ContextMenu, _React$Component);

  function ContextMenu() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      visible: false,
      content: null,
    };

    _this.showContextMenu = function(x, y, item) {
      var _this$props = _this.props,
        graph = _this$props.graph,
        renderContent = _this$props.renderContent;
      clearSelectedState(graph);

      if (item) {
        graph.setItemState(item, ItemState.Selected, true);
      }

      global.plugin.contextMenu.state = 'show';
      global.clipboard.point = {
        x: x,
        y: y,
      };
      var position = graph.getCanvasByPoint(x, y);

      _this.setState({
        visible: true,
        content: renderContent(item, position, _this.hideContextMenu),
      });
    };

    _this.hideContextMenu = function() {
      global.plugin.contextMenu.state = 'hide';

      _this.setState({
        visible: false,
        content: null,
      });
    };

    return _this;
  }

  var _proto = ContextMenu.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _this$props2 = this.props,
      graph = _this$props2.graph,
      type = _this$props2.type;

    switch (type) {
      case ContextMenuType.Canvas:
        graph.on(GraphCanvasEvent.onCanvasContextMenu, function(e) {
          e.preventDefault();
          var x = e.x,
            y = e.y;

          _this2.showContextMenu(x, y);
        });
        break;

      case ContextMenuType.Node:
        graph.on(GraphNodeEvent.onNodeContextMenu, function(e) {
          e.preventDefault();
          var x = e.x,
            y = e.y,
            item = e.item;

          _this2.showContextMenu(x, y, item);
        });
        break;

      case ContextMenuType.Edge:
        graph.on(GraphEdgeEvent.onEdgeContextMenu, function(e) {
          e.preventDefault();
          var x = e.x,
            y = e.y,
            item = e.item;

          _this2.showContextMenu(x, y, item);
        });
        break;
    }

    graph.on(GraphCommonEvent.onClick, function() {
      _this2.hideContextMenu();
    });
  };

  _proto.render = function render() {
    var graph = this.props.graph;
    var _this$state = this.state,
      visible = _this$state.visible,
      content = _this$state.content;

    if (!visible) {
      return null;
    }

    return /*#__PURE__*/ ReactDOM.createPortal(content, graph.get('container'));
  };

  return ContextMenu;
})(React.Component);

ContextMenu.defaultProps = {
  type: ContextMenuType.Canvas,
};
var index$5 = withEditorContext(ContextMenu);

var EditableLabel = /*#__PURE__*/ (function(_React$Component) {
  _inheritsLoose(EditableLabel, _React$Component);

  function EditableLabel() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.el = null;
    _this.state = {
      visible: false,
    };

    _this.update = function() {
      var _this$props = _this.props,
        graph = _this$props.graph,
        executeCommand = _this$props.executeCommand;
      var node = getSelectedNodes(graph)[0];
      var model = node.getModel();
      var label = _this.el.textContent;

      if (label === model.label) {
        return;
      }

      executeCommand('update', {
        id: model.id,
        updateModel: {
          label: label,
        },
        forceRefreshLayout: isMind(graph),
      });
    };

    _this.showEditableLabel = function() {
      global.plugin.editableLabel.state = 'show';

      _this.setState(
        {
          visible: true,
        },
        function() {
          var _assertThisInitialize = _assertThisInitialized(_this),
            el = _assertThisInitialize.el;

          if (el) {
            el.focus();
            document.execCommand('selectAll', false, null);
          }
        },
      );
    };

    _this.hideEditableLabel = function() {
      global.plugin.editableLabel.state = 'hide';

      _this.setState({
        visible: false,
      });
    };

    _this.handleBlur = function() {
      _this.update();

      _this.hideEditableLabel();
    };

    _this.handleKeyDown = function(e) {
      e.stopPropagation();
      var key = e.key;

      if (['Tab'].includes(key)) {
        e.preventDefault();
      }

      if (['Enter', 'Escape', 'Tab'].includes(key)) {
        _this.update();

        _this.hideEditableLabel();
      }
    };

    return _this;
  }

  var _proto = EditableLabel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var graph = this.props.graph;
    graph.on(EditorEvent.onLabelStateChange, function(_ref) {
      var labelState = _ref.labelState;

      if (labelState === LabelState.Show) {
        _this2.showEditableLabel();
      } else {
        _this2.hideEditableLabel();
      }
    });
    graph.on(GraphNodeEvent.onNodeDoubleClick, function() {
      _this2.showEditableLabel();
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
      graph = _this$props2.graph,
      labelClassName = _this$props2.labelClassName,
      labelMaxWidth = _this$props2.labelMaxWidth;
    var mode = graph.getCurrentMode();
    var zoom = graph.getZoom();

    if (mode === GraphMode.Readonly) {
      return null;
    }

    var node = getSelectedNodes(graph)[0];

    if (!node) {
      return null;
    }

    var model = node.getModel();
    var group = node.getContainer();
    var label = model.label;
    var labelShape = group.findByClassName(labelClassName);

    if (!labelShape) {
      return null;
    }

    var visible = this.state.visible;

    if (!visible) {
      return null;
    } // Get the label offset

    var _labelShape$getBBox = labelShape.getBBox(),
      relativeX = _labelShape$getBBox.x,
      relativeY = _labelShape$getBBox.y;

    var _G6$Util$applyMatrix = G6.Util.applyMatrix(
        {
          x: relativeX,
          y: relativeY,
        },
        node.getContainer().getMatrix(),
      ),
      absoluteX = _G6$Util$applyMatrix.x,
      absoluteY = _G6$Util$applyMatrix.y;

    var _graph$getCanvasByPoi = graph.getCanvasByPoint(absoluteX, absoluteY),
      left = _graph$getCanvasByPoi.x,
      top = _graph$getCanvasByPoi.y; // Get the label size

    var _labelShape$getBBox2 = labelShape.getBBox(),
      width = _labelShape$getBBox2.width,
      height = _labelShape$getBBox2.height; // Get the label font

    var font = labelShape.attr('font');
    var style = {
      position: 'absolute',
      top: top,
      left: left,
      width: 'auto',
      height: 'auto',
      minWidth: width,
      minHeight: height,
      maxWidth: labelMaxWidth,
      font: font,
      background: 'white',
      border: '1px solid #1890ff',
      outline: 'none',
      transform: 'scale(' + zoom + ')',
      transformOrigin: 'left top',
    };
    return /*#__PURE__*/ ReactDOM.createPortal(
      /*#__PURE__*/ React.createElement(
        'div',
        {
          ref: function ref(el) {
            _this3.el = el;
          },
          style: style,
          contentEditable: true,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          suppressContentEditableWarning: true,
        },
        label,
      ),
      graph.get('container'),
    );
  };

  return EditableLabel;
})(React.Component);

EditableLabel.defaultProps = {
  labelClassName: 'node-label',
  labelMaxWidth: 100,
};
var index$6 = withEditorContext(EditableLabel);

exports.G6 = G6;
exports.Command = index$2;
exports.CommandManager = CommandManager;
exports.ContextMenu = index$5;
exports.DetailPanel = DetailPanel;
exports.EditableLabel = index$6;
exports.Flow = Flow;
exports.Item = Item$1;
exports.ItemPanel = index$3;
exports.ItemPopover = index$4;
exports.Mind = Mind;
exports.RegisterBehavior = RegisterBehavior;
exports.RegisterCommand = RegisterCommand;
exports.RegisterEdge = RegisterEdge;
exports.RegisterNode = RegisterNode;
exports.Util = index$1;
exports.baseCommand = baseCommand;
exports.behaviorManager = behaviorManager;
exports.constants = index;
exports.default = Editor;
exports.global = global;
exports.setAnchorPointsState = setAnchorPointsState;
exports.withEditorContext = withEditorContext;
