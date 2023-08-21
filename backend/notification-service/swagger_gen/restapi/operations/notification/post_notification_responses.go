// Code generated by go-swagger; DO NOT EDIT.

package notification

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/sunbirdrc/notification-service/swagger_gen/models"
)

// PostNotificationOKCode is the HTTP code returned for type PostNotificationOK
const PostNotificationOKCode int = 200

/*PostNotificationOK OK

swagger:response postNotificationOK
*/
type PostNotificationOK struct {

	/*
	  In: Body
	*/
	Payload *models.Success `json:"body,omitempty"`
}

// NewPostNotificationOK creates PostNotificationOK with default headers values
func NewPostNotificationOK() *PostNotificationOK {

	return &PostNotificationOK{}
}

// WithPayload adds the payload to the post notification o k response
func (o *PostNotificationOK) WithPayload(payload *models.Success) *PostNotificationOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post notification o k response
func (o *PostNotificationOK) SetPayload(payload *models.Success) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostNotificationOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// PostNotificationBadRequestCode is the HTTP code returned for type PostNotificationBadRequest
const PostNotificationBadRequestCode int = 400

/*PostNotificationBadRequest Bad Request

swagger:response postNotificationBadRequest
*/
type PostNotificationBadRequest struct {

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewPostNotificationBadRequest creates PostNotificationBadRequest with default headers values
func NewPostNotificationBadRequest() *PostNotificationBadRequest {

	return &PostNotificationBadRequest{}
}

// WithPayload adds the payload to the post notification bad request response
func (o *PostNotificationBadRequest) WithPayload(payload *models.Error) *PostNotificationBadRequest {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post notification bad request response
func (o *PostNotificationBadRequest) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostNotificationBadRequest) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(400)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
